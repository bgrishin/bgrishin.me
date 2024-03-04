import { css } from 'cssed/macro'
import { useEffect, useState } from 'react'
import { Project } from '../../common/types/project.interface'
import Loading from '../loading/loading'

const styles = css`
  .projects {
    margin-top: 20px;
  }

  .title {
    font-weight: 500;
    font-size: 25px;
    text-align: center;
  }

  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .project {
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: space-between;
    padding: 17px 20px;
    width: 100%;
    box-shadow: 0 0 10px #c9c9c9;
    margin-bottom: 15px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    cursor: pointer;
    transition: 0.3s;
  }

  .project:hover {
    outline: 2px solid #1266c7;
  }

  .project img {
    border-radius: 4px;
    height: 70px;
    width: 70px;
    margin-right: 20px;
  }

  .project .icon {
    border-radius: 4px;
    font-size: 50px;
    width: 70px;
    text-align: center;
    margin-right: 20px;
  }

  .projectTitle {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .nameBlock {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    .items {
      padding: 0 10px;
    }
  }
`

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = async () => {
    const data = await fetch('/api/projects').then((res) => res.json())
    setProjects(data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const isValidUrl = (urlString: string) => {
    return urlString.startsWith('https:') || urlString.startsWith('/')
  }

  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>️️📚 Projects</h2>
      <div className={styles.items}>
        {projects.length ? (
          projects.map(
            ({ imageURL, name, description, link, bgColor, textColor }, i) => (
              <div
                className={styles.project}
                style={{
                  background: bgColor,
                  color: textColor
                }}
                key={i}
                title={'Click to open in new tab'}
                onClick={() => window.open(link, '_blank')}
              >
                {imageURL && isValidUrl(imageURL) ? (
                  <div>
                    <img src={imageURL} alt={'Project image.'} />
                  </div>
                ) : imageURL ? (
                  <div>
                    <div className={styles.icon}>{imageURL}</div>
                  </div>
                ) : null}
                <div className={styles.nameBlock}>
                  <div className={styles.projectTitle}>{name}</div>
                  <div style={{ fontSize: 16, color: '#9b9b9b' }}>
                    {description}
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default Projects
