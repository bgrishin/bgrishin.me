import { css } from 'cssed/macro'
import { useEffect, useState } from 'react'
import Loading from '../loading/loading'
import { Project } from '../../common/types/project.interface'
import LinkButton from '../link/link'

const styles = css`
  .projects {
    margin-top: 20px;
    margin-left: 10px;
  }

  .title {
    font-weight: 500;
    font-size: 25px;
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
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 17px 20px;
    width: 100%;
    box-shadow: 0 0 10px #c9c9c9;
    margin-bottom: 15px;
  }

  .project img {
    border-radius: 6px;
    height: 70px;
    width: 70px;
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
              >
                {imageURL ? (
                  <div>
                    <img src={imageURL} alt={'Project image.'} />
                  </div>
                ) : null}
                <div className={styles.nameBlock}>
                  <div className={styles.projectTitle}>{name}</div>
                  <div style={{ fontSize: 16, color: '#9b9b9b' }}>
                    {description}
                  </div>
                </div>
                <div>
                  <LinkButton href={link}>Open</LinkButton>
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
