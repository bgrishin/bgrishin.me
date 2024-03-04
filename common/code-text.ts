export const CODE_TEXT = `"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[456], {
    8891: function(e, s, a) {
        a.r(s),
        a.d(s, {
            Tooltip: function() {
                return r
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(1226);
        let r = e=>{
            let {content: s, children: a, rawContent: r=!1, offset: i, ...d} = e
              , c = (0,
            l.useMemo)(()=>r ? s : (0,
            t.jsx)("span", {
                className: "rounded bg-gray-300/90 px-1.5 py-1 text-xs font-medium text-black",
                children: s
            }), [s, r]);
            return s ? (0,
            t.jsx)(n.ZP, {
                content: c,
                offset: null != i ? i : [0, 5],
                ...d,
                children: (0,
                t.jsx)("div", {
                    children: a
                })
            }) : (0,
            t.jsx)("div", {
                children: a
            })
        }
    },
    5254: function(e, s, a) {
        a.d(s, {
            I: function() {
                return y
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(5025)
          , r = a(5215)
          , i = a(4744)
          , d = a(3353)
          , c = a(7271)
          , o = a(4964)
          , m = a(8480)
          , x = a(1994)
          , u = a(2115)
          , h = a(102)
          , f = a(3934)
          , p = a(4821)
          , j = a(8891);
        let g = e=>{
            let {title: s, children: a, className: l} = e;
            return (0,
            t.jsxs)("div", {
                className: (0,
                p.cn)("flex w-full flex-col gap-2", l),
                children: [(0,
                t.jsx)("div", {
                    className: "border-b",
                    children: (0,
                    t.jsx)("h2", {
                        children: s
                    })
                }), a]
            })
        }
          , v = {
            github: {
                name: "GitHub",
                icon: (0,
                t.jsx)(d.wGg, {
                    className: "h-4 w-4"
                })
            }
        }
          , N = (e,s)=>e === (null == s ? void 0 : s.primaryEmailAddressId)
          , w = e=>{
            let {email: s, user: a} = e
              , n = s.linkedTo.some(e=>"oauth_github" === e.type)
              , [r,i] = (0,
            l.useState)(!1)
              , c = 1 === a.emailAddresses.length ? "Must have at least one email address." : N(s.id, a) ? "Cannot remove primary email address" : n ? "Cannot remove email linked to GitHub." : "Remove";
            return (0,
            t.jsxs)("div", {
                className: "flex w-full flex-row items-center justify-between gap-2",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex flex-row gap-1",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm",
                        children: s.emailAddress
                    }), N(s.id, a) && (0,
                    t.jsx)("span", {
                        className: "rounded bg-primary-foreground px-1.5 text-xs font-bold text-primary-muted dark:bg-primary-muted dark:text-primary-foreground",
                        children: "Primary"
                    }), n && (0,
                    t.jsx)("span", {
                        className: "rounded bg-gray-300/90 px-1.5 text-xs font-bold text-gray-700",
                        children: "GitHub"
                    }), "verified" !== s.verification.status && (0,
                    t.jsx)("span", {
                        className: "rounded bg-gray-300/90 px-1.5 text-xs font-bold text-gray-700",
                        children: r ? "Check your Email" : "Unverified"
                    })]
                }), !N(s.id, a) && (0,
                t.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: ["verified" !== s.verification.status ? (0,
                    t.jsx)(j.Tooltip, {
                        content: "Verify Email",
                        trigger: "mouseenter",
                        children: (0,
                        t.jsx)("button", {
                            "aria-label": "Verify Email",
                            onClick: async()=>{
                                i(!0),
                                await s.createMagicLinkFlow().startMagicLinkFlow({
                                    redirectUrl: window.location.href
                                })
                            }
                            ,
                            children: r ? (0,
                            t.jsx)(d.zkR, {
                                className: "block h-4 w-4 animate-spin"
                            }) : (0,
                            t.jsx)(d.kcA, {
                                className: "block h-4 w-4 "
                            })
                        })
                    }) : (0,
                    t.jsx)(j.Tooltip, {
                        content: "Make Primary",
                        trigger: "mouseenter",
                        children: (0,
                        t.jsxs)("button", {
                            "aria-label": "Make Primary",
                            onClick: async()=>{
                                await s.createMagicLinkFlow().startMagicLinkFlow({
                                    redirectUrl: window.location.href
                                }),
                                a.update({
                                    primaryEmailAddressId: s.id
                                })
                            }
                            ,
                            className: "group",
                            children: [(0,
                            t.jsx)(d.r7p, {
                                className: "block h-4 w-4 group-hover:hidden"
                            }), (0,
                            t.jsx)(d.e0l, {
                                className: "hidden h-4 w-4 group-hover:block"
                            })]
                        })
                    }), (0,
                    t.jsx)(j.Tooltip, {
                        content: c,
                        children: (0,
                        t.jsxs)(x.z, {
                            className: "group relative hover:text-red-600",
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>s.destroy(),
                            disabled: 1 === a.emailAddresses.length || N(s.id, a) || n,
                            children: [(0,
                            t.jsx)(d.XHJ, {
                                className: "h-4 w-4"
                            }), (0,
                            t.jsx)(d.XZC, {
                                className: "absolute hidden h-4 w-4 rotate-12 group-disabled:block"
                            })]
                        })
                    })]
                })]
            }, s.id)
        }
          , y = e=>{
            var s, a;
            let {user: y} = (0,
            r.aF)()
              , {sessionId: b} = (0,
            r.aC)()
              , [k,A] = (0,
            l.useState)("")
              , C = (0,
            f.pm)()
              , z = (0,
            n.useRouter)()
              , {data: S} = (0,
            c.k)({
                queryKey: ["sessions"],
                queryFn: ()=>{
                    var e;
                    return null !== (e = null == y ? void 0 : y.getSessions()) && void 0 !== e ? e : []
                }
            });
            return y ? (0,
            t.jsxs)("div", {
                className: (0,
                p.cn)("p-2 sm:p-4", e.className),
                children: [(0,
                t.jsxs)("div", {
                    className: "",
                    children: [(0,
                    t.jsx)("h1", {
                        className: "text-2xl font-bold",
                        children: "Account"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Manage your account information"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "mt-4 space-y-4",
                    children: [(0,
                    t.jsx)(g, {
                        title: "Profile",
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex flex-row items-center gap-2",
                            children: [(0,
                            t.jsxs)(m.qE, {
                                className: "h-16 w-16",
                                children: [(0,
                                t.jsx)(m.F$, {
                                    src: y.profileImageUrl,
                                    alt: "Profile Image"
                                }), (0,
                                t.jsx)(i.Q5, {
                                    children: [null === (s = y.firstName) || void 0 === s ? void 0 : s[0], null === (a = y.lastName) || void 0 === a ? void 0 : a[0]].join("")
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0,
                                t.jsx)("p", {
                                    children: "".concat(y.firstName, " ").concat(y.lastName)
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "".concat(y.username)
                                })]
                            })]
                        })
                    }), (0,
                    t.jsx)(g, {
                        title: "Email Addresses",
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [y.emailAddresses.sort((e,s)=>N(e.id, y) ? -1 : 0).map(e=>(0,
                            t.jsx)(w, {
                                email: e,
                                user: y
                            }, e.id)), (0,
                            t.jsx)("div", {
                                className: "flex flex-row gap-2 ",
                                children: (0,
                                t.jsxs)(o.aR, {
                                    children: [(0,
                                    t.jsx)(o.vW, {
                                        asChild: !0,
                                        children: (0,
                                        t.jsx)("div", {
                                            className: "flex flex-row items-start gap-1",
                                            children: (0,
                                            t.jsxs)(x.z, {
                                                variant: "link",
                                                size: "sm",
                                                className: "-ml-3 gap-1 font-bold hover:no-underline",
                                                children: [(0,
                                                t.jsx)(d.pOD, {
                                                    className: "h-3 w-3"
                                                }), "Add Email Address"]
                                            })
                                        })
                                    }), (0,
                                    t.jsxs)(o._T, {
                                        children: [(0,
                                        t.jsxs)(o.fY, {
                                            children: [(0,
                                            t.jsx)(o.f$, {
                                                children: "Add an Email Address"
                                            }), (0,
                                            t.jsx)(o.yT, {
                                                children: "Enter the email address you want to add to your account."
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "flex flex-col gap-2",
                                            children: [(0,
                                            t.jsx)(h._, {
                                                htmlFor: "email",
                                                className: "text-xs font-bold text-muted-foreground",
                                                children: "Email Address"
                                            }), (0,
                                            t.jsx)(u.II, {
                                                type: "email",
                                                id: "email",
                                                value: k,
                                                onChange: e=>A(e.target.value)
                                            })]
                                        }), (0,
                                        t.jsxs)(o.xo, {
                                            children: [(0,
                                            t.jsx)(o.le, {
                                                onClick: ()=>{
                                                    A("")
                                                }
                                                ,
                                                children: "Cancel"
                                            }), (0,
                                            t.jsx)(o.OL, {
                                                onClick: async()=>{
                                                    await y.createEmailAddress({
                                                        email: k
                                                    }).catch(e=>{
                                                        C.toast({
                                                            title: "Error adding email",
                                                            description: "An error occurred while adding your email. The email may already be linked to another account.",
                                                            variant: "destructive"
                                                        })
                                                    }
                                                    )
                                                }
                                                ,
                                                children: "Add Email"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), (0,
                    t.jsx)(g, {
                        title: "Connected Accounts",
                        children: (0,
                        t.jsx)("div", {
                            className: "flex flex-col gap-2",
                            children: y.externalAccounts.map(e=>(0,
                            t.jsx)("div", {
                                className: "flex w-full flex-row items-center justify-between gap-2 py-2 text-muted-foreground",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "flex flex-row items-center gap-2",
                                    children: [v[e.provider].icon, (0,
                                    t.jsx)("p", {
                                        className: "text-sm",
                                        children: e.username
                                    })]
                                })
                            }, e.id))
                        })
                    }), (0,
                    t.jsx)(g, {
                        title: "Danger Zone",
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex flex-row justify-between gap-2",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0,
                                t.jsx)("p", {
                                    className: "text-sm",
                                    children: "Delete your account"
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Delete your account and all its associated data."
                                })]
                            }), (0,
                            t.jsxs)(o.aR, {
                                children: [(0,
                                t.jsx)(o.vW, {
                                    asChild: !0,
                                    children: (0,
                                    t.jsx)(x.z, {
                                        variant: "destructive",
                                        children: (0,
                                        t.jsxs)("div", {
                                            className: "flex flex-row items-center gap-1",
                                            children: [(0,
                                            t.jsx)("span", {
                                                children: "Delete"
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "hidden sm:block",
                                                children: "Account"
                                            })]
                                        })
                                    })
                                }), (0,
                                t.jsxs)(o._T, {
                                    children: [(0,
                                    t.jsxs)(o.fY, {
                                        children: [(0,
                                        t.jsx)(o.f$, {
                                            children: "Are you sure you want to delete your account?"
                                        }), (0,
                                        t.jsx)(o.yT, {
                                            children: (0,
                                            t.jsx)("p", {
                                                className: "pb-8 pt-4 text-sm",
                                                children: "This action cannot be undone. This will remove your account as well as any apps and files associated with it."
                                            })
                                        })]
                                    }), (0,
                                    t.jsxs)(o.xo, {
                                        children: [(0,
                                        t.jsx)(o.le, {
                                            children: "Cancel"
                                        }), (0,
                                        t.jsx)(o.OL, {
                                            onClick: async()=>{
                                                await y.delete(),
                                                z.push("/"),
                                                z.refresh()
                                            }
                                            ,
                                            children: "Delete Account"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "mt-8",
                    children: [(0,
                    t.jsx)("h1", {
                        className: "text-2xl font-bold",
                        children: "Security"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Manage your security preferences"
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: (0,
                    t.jsx)(g, {
                        title: "Active Devices",
                        children: (0,
                        t.jsx)("div", {
                            className: "flex h-max flex-col gap-2 overflow-y-auto sm:h-64",
                            children: S.sort((e,s)=>e.id === b ? -1 : 0).map(e=>(0,
                            t.jsxs)("div", {
                                className: "flex flex-row items-start justify-between",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex flex-row items-start gap-4",
                                    children: [e.latestActivity.isMobile ? (0,
                                    t.jsx)(d.pY8, {
                                        className: "h-8 w-8 text-muted-foreground"
                                    }) : (0,
                                    t.jsx)(d.ugZ, {
                                        className: "h-8 w-8 text-muted-foreground"
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex flex-row items-center gap-2",
                                            children: [(0,
                                            t.jsx)("p", {
                                                className: "text-sm font-medium",
                                                children: e.latestActivity.deviceType
                                            }), e.id === b ? (0,
                                            t.jsx)("span", {
                                                className: "rounded bg-primary-foreground px-1.5 text-xs font-bold text-primary-muted dark:bg-primary-muted dark:text-primary-foreground",
                                                children: "Current Device"
                                            }) : null]
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "".concat(e.latestActivity.browserName, " ").concat(e.latestActivity.browserVersion)
                                        }), (0,
                                        t.jsx)(j.Tooltip, {
                                            content: e.latestActivity.ipAddress,
                                            children: (0,
                                            t.jsx)("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [e.latestActivity.city || "unknown", e.latestActivity.country || "unknown"].join(", ")
                                            })
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "".concat(e.lastActiveAt.toLocaleDateString(), " @ ").concat(e.lastActiveAt.toLocaleTimeString())
                                        })]
                                    })]
                                }), e.id !== b && (0,
                                t.jsx)("div", {
                                    className: "flex flex-row gap-2",
                                    children: (0,
                                    t.jsx)(j.Tooltip, {
                                        content: "Remove",
                                        children: (0,
                                        t.jsx)(x.z, {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "hover:text-red-600",
                                            onClick: ()=>e.revoke(),
                                            children: (0,
                                            t.jsx)(d.iz5, {
                                                className: "h-3 w-3"
                                            })
                                        })
                                    })
                                })]
                            }, e.id))
                        })
                    })
                })]
            }) : null
        }
    },
    1553: function(e, s, a) {
        a.r(s),
        a.d(s, {
            AppSwitcher: function() {
                return u
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(5025)
          , r = a(5215)
          , i = a(3353)
          , d = a(4003)
          , c = a(1994)
          , o = a(59)
          , m = a(1313)
          , x = a(4821);
        function u(e) {
            let s = (0,
            n.useRouter)()
              , {user: a} = (0,
            r.aF)()
              , [u,h] = (0,
            l.useState)(!1)
              , f = e.apps.find(s=>s.id === e.appId);
            return f ? (0,
            t.jsxs)(m.J2, {
                open: u,
                onOpenChange: h,
                children: [(0,
                t.jsx)(m.xo, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(c.z, {
                        variant: "ghost",
                        role: "combobox",
                        "aria-expanded": u,
                        "aria-label": "Select a project",
                        className: "w-full justify-between p-0 pr-1 md:w-60",
                        children: [(0,
                        t.jsx)("div", {
                            className: "mr-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-primary p-0 font-bold text-primary-foreground",
                            children: null == f ? void 0 : f.name[0]
                        }), (0,
                        t.jsx)("span", {
                            className: "z-10 truncate font-semibold",
                            children: null == f ? void 0 : f.name
                        }), (0,
                        t.jsx)(i.jnn, {
                            className: "ml-auto h-4 w-4 shrink-0"
                        })]
                    })
                }), (0,
                t.jsx)(m.yk, {
                    className: "w-full p-0 md:w-60",
                    align: "end",
                    children: (0,
                    t.jsxs)(o.mY, {
                        children: [(0,
                        t.jsxs)(o.e8, {
                            children: [(0,
                            t.jsx)(o.sZ, {
                                placeholder: "Search app..."
                            }), (0,
                            t.jsx)(o.fu, {
                                heading: "Apps",
                                children: e.apps.map(l=>(0,
                                t.jsxs)(o.di, {
                                    onSelect: ()=>{
                                        var t;
                                        h(!1),
                                        s.push("/dashboard/".concat(l.id)),
                                        null == a || a.update({
                                            unsafeMetadata: {
                                                ...a.unsafeMetadata,
                                                activeApp: l.id
                                            }
                                        }),
                                        null === (t = e.afterSwitch) || void 0 === t || t.call(e)
                                    }
                                    ,
                                    className: (0,
                                    x.cn)("text-sm", l.id === (null == f ? void 0 : f.id) ? "border bg-accent" : "hover:bg-accent/70 hover:text-accent-foreground"),
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-primary p-0 font-bold text-primary-foreground",
                                        children: null == l ? void 0 : l.name[0]
                                    }), (0,
                                    t.jsx)("span", {
                                        className: "truncate",
                                        children: l.name
                                    }), (0,
                                    t.jsx)(d.C, {
                                        className: "ml-auto mr-1",
                                        variant: "secondary",
                                        children: l.region
                                    })]
                                }, l.id))
                            })]
                        }), (0,
                        t.jsx)(o.zz, {}), (0,
                        t.jsx)(o.e8, {
                            children: (0,
                            t.jsx)(o.fu, {
                                children: (0,
                                t.jsxs)(o.di, {
                                    onSelect: ()=>{
                                        var a;
                                        s.push("/dashboard/new"),
                                        h(!1),
                                        null === (a = e.afterSwitch) || void 0 === a || a.call(e)
                                    }
                                    ,
                                    className: "cursor-pointer",
                                    children: [(0,
                                    t.jsx)(i.pOD, {
                                        className: "mr-2 h-5 w-5"
                                    }), "Create new app"]
                                })
                            })
                        })]
                    })
                })]
            }) : (0,
            t.jsxs)(c.z, {
                variant: "ghost",
                size: "sm",
                role: "combobox",
                "aria-expanded": u,
                "aria-label": "Select a workspace",
                className: "w-52 justify-between opacity-50",
                children: ["Select a project", (0,
                t.jsx)(i.jnn, {
                    className: "ml-auto h-4 w-4 shrink-0"
                })]
            })
        }
    },
    1696: function(e, s, a) {
        a.r(s),
        a.d(s, {
            UserButton: function() {
                return f
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(5025)
          , r = a(5215)
          , i = a(3353)
          , d = a(5254)
          , c = a(8480)
          , o = a(1994)
          , m = a(6868)
          , x = a(7461)
          , u = a(3934)
          , h = a(3316);
        function f() {
            var e, s;
            let {user: a} = (0,
            r.aF)()
              , d = (0,
            n.useRouter)()
              , f = (0,
            u.pm)()
              , [j,g] = (0,
            l.useState)(!1);
            if (!a)
                return (0,
                t.jsx)(o.z, {
                    variant: "ghost",
                    className: "relative h-8 w-8 rounded-full",
                    children: (0,
                    t.jsx)(c.qE, {
                        className: "h-8 w-8",
                        children: (0,
                        t.jsx)(c.Q5, {
                            children: (0,
                            t.jsx)(i.Tk0, {})
                        })
                    })
                });
            let v = "".concat(a.firstName, " ").concat(a.lastName).split(" ").map(e=>e[0]).join("")
              , N = null === (e = a.emailAddresses.find(e=>e.id === a.primaryEmailAddressId)) || void 0 === e ? void 0 : e.emailAddress;
            return (0,
            t.jsxs)(m.Dialog, {
                open: j,
                onOpenChange: g,
                children: [(0,
                t.jsxs)(x.h_, {
                    children: [(0,
                    t.jsx)(x.$F, {
                        asChild: !0,
                        children: (0,
                        t.jsx)(o.z, {
                            variant: "ghost",
                            className: "relative h-8 w-8 rounded-full",
                            children: (0,
                            t.jsxs)(c.qE, {
                                className: "h-8 w-8",
                                children: [(0,
                                t.jsx)(c.F$, {
                                    src: a.profileImageUrl,
                                    alt: null !== (s = a.username) && void 0 !== s ? s : ""
                                }), (0,
                                t.jsx)(c.Q5, {
                                    children: v
                                })]
                            })
                        })
                    }), (0,
                    t.jsxs)(x.AW, {
                        className: "w-56",
                        align: "end",
                        forceMount: !0,
                        children: [(0,
                        t.jsx)(x.Ju, {
                            className: "font-normal",
                            children: (0,
                            t.jsxs)("div", {
                                className: "flex flex-col space-y-1",
                                children: [(0,
                                t.jsxs)("p", {
                                    className: "text-sm font-medium leading-none",
                                    children: [a.firstName, " ", a.lastName]
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-xs leading-none text-muted-foreground",
                                    children: N
                                })]
                            })
                        }), (0,
                        t.jsx)(x.VD, {}), (0,
                        t.jsxs)(x.Qk, {
                            children: [(0,
                            t.jsx)(m.DialogTrigger, {
                                asChild: !0,
                                children: (0,
                                t.jsxs)(x.Xi, {
                                    children: [(0,
                                    t.jsx)(i.Tk0, {
                                        className: "mr-2 h-4 w-4"
                                    }), (0,
                                    t.jsx)("span", {
                                        children: "Profile"
                                    })]
                                })
                            }), (0,
                            t.jsxs)(x.Xi, {
                                onClick: ()=>{
                                    let e = a.unsafeMetadata.activeApp;
                                    if ("string" != typeof e) {
                                        f.toast({
                                            variant: "destructive",
                                            title: "Unable to open billing",
                                            description: "This is likely since you don't have any active app. Go to dashboard and select an app, then go to billing from there."
                                        });
                                        return
                                    }
                                    h.SX.getBillingPortalUrl.mutate({
                                        appId: e
                                    }).then(s=>{
                                        let {url: a} = s;
                                        if (a)
                                            return d.push(a);
                                        d.push("/dashboard/".concat(e, "/billing"))
                                    }
                                    ).catch(()=>{
                                        f.toast({
                                            variant: "destructive",
                                            title: "Unable to open billing",
                                            description: "Something went wrong trying to open your billing portal. Please try again later"
                                        })
                                    }
                                    )
                                }
                                ,
                                children: [(0,
                                t.jsx)(i.Xwj, {
                                    className: "mr-2 h-4 w-4"
                                }), (0,
                                t.jsx)("span", {
                                    children: "Billing"
                                })]
                            })]
                        }), (0,
                        t.jsx)(x.VD, {}), (0,
                        t.jsx)(r.AM, {
                            signOutCallback: ()=>{
                                d.push("/")
                            }
                            ,
                            children: (0,
                            t.jsxs)(x.Xi, {
                                children: [(0,
                                t.jsx)(i.iz5, {
                                    className: "mr-2 h-4 w-4"
                                }), (0,
                                t.jsx)("span", {
                                    children: "Log out"
                                })]
                            })
                        })]
                    })]
                }), (0,
                t.jsx)(p, {})]
            })
        }
        function p() {
            return (0,
            t.jsx)(m.DialogContent, {
                className: "",
                children: (0,
                t.jsx)(d.I, {})
            })
        }
    },
    1841: function(e, s, a) {
        a.r(s),
        a.d(s, {
            WorkspaceSwitcher: function() {
                return u
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(5025)
          , r = a(5215)
          , i = a(3353)
          , d = a(8480)
          , c = a(1994)
          , o = a(59)
          , m = a(1313)
          , x = a(4821);
        function u(e) {
            var s, a, u, h, f, p, j, g, v;
            let N = (0,
            n.useRouter)()
              , [w,y] = (0,
            l.useState)(!1)
              , b = (0,
            r.eW)()
              , k = (0,
            r.o8)()
              , {user: A, isLoaded: C, isSignedIn: z} = (0,
            r.aF)();
            if (C && !z)
                return null;
            let S = null !== (p = k.organization) && void 0 !== p ? p : A;
            if (!b.isLoaded || !k.isLoaded || !S)
                return (0,
                t.jsxs)(c.z, {
                    variant: "ghost",
                    size: "sm",
                    role: "combobox",
                    "aria-expanded": w,
                    "aria-label": "Select a workspace",
                    className: "w-full justify-between p-0 pr-1 font-semibold md:w-52",
                    children: [(0,
                    t.jsx)(d.qE, {
                        className: "mr-2 h-5 w-5",
                        children: (0,
                        t.jsx)(d.Q5, {
                            children: "Ac"
                        })
                    }), "Select a workspace", (0,
                    t.jsx)(i.jnn, {
                        className: "ml-auto h-4 w-4 shrink-0"
                    })]
                });
            let E = {
                id: S.id,
                name: "name"in S ? S.name : S.fullName,
                image: S.imageUrl
            };
            return (0,
            t.jsxs)(m.J2, {
                open: w,
                onOpenChange: y,
                children: [(0,
                t.jsx)(m.xo, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(c.z, {
                        variant: "ghost",
                        role: "combobox",
                        "aria-expanded": w,
                        "aria-label": "Select a workspace",
                        className: "w-full justify-between p-0 pr-1 font-semibold md:w-52",
                        children: [(0,
                        t.jsxs)(d.qE, {
                            className: "mr-2 h-8 w-8 rounded-md",
                            children: [(0,
                            t.jsx)(d.F$, {
                                src: null !== (j = null == E ? void 0 : E.image) && void 0 !== j ? j : ""
                            }), (0,
                            t.jsx)(d.Q5, {
                                children: null === (s = E.name) || void 0 === s ? void 0 : s.substring(0, 2)
                            })]
                        }), (0,
                        t.jsx)("span", {
                            className: "truncate",
                            children: E.name
                        }), (0,
                        t.jsx)(i.jnn, {
                            className: "ml-auto h-4 w-4 shrink-0"
                        })]
                    })
                }), (0,
                t.jsx)(m.yk, {
                    className: "w-full p-0 md:w-52",
                    align: "start",
                    children: (0,
                    t.jsx)(o.mY, {
                        children: (0,
                        t.jsxs)(o.e8, {
                            children: [(0,
                            t.jsx)(o.sZ, {
                                placeholder: "Search workspace..."
                            }), (0,
                            t.jsx)(o.fu, {
                                heading: "Personal account",
                                children: (0,
                                t.jsxs)(o.di, {
                                    onSelect: async()=>{
                                        var s, a, t;
                                        (null == A ? void 0 : A.id) && (E.id = null !== (t = A.id) && void 0 !== t ? t : "",
                                        await (null === (s = b.setActive) || void 0 === s ? void 0 : s.call(b, {
                                            organization: null
                                        })),
                                        y(!1),
                                        N.push("/dashboard"),
                                        null === (a = e.afterSwitch) || void 0 === a || a.call(e),
                                        N.refresh())
                                    }
                                    ,
                                    className: "cursor-pointer text-sm",
                                    children: [(0,
                                    t.jsxs)(d.qE, {
                                        className: "mr-2 h-5 w-5 rounded-md",
                                        children: [(0,
                                        t.jsx)(d.F$, {
                                            src: null == A ? void 0 : A.imageUrl,
                                            alt: null !== (g = null == A ? void 0 : A.fullName) && void 0 !== g ? g : ""
                                        }), (0,
                                        t.jsx)(d.Q5, {
                                            children: null !== (v = "".concat(null == A ? void 0 : null === (a = A.firstName) || void 0 === a ? void 0 : a[0]).concat(null == A ? void 0 : null === (u = A.lastName) || void 0 === u ? void 0 : u[0])) && void 0 !== v ? v : "JD"
                                        })]
                                    }), (0,
                                    t.jsx)("span", {
                                        className: "truncate",
                                        children: null == A ? void 0 : A.fullName
                                    }), (0,
                                    t.jsx)(i.nQG, {
                                        className: (0,
                                        x.cn)("ml-auto h-4 w-4", null === k.organization ? "opacity-100" : "opacity-0")
                                    })]
                                })
                            }), (0,
                            t.jsx)(o.fu, {
                                heading: "Organizations",
                                children: (null === (h = b.organizationList) || void 0 === h ? void 0 : h.length) > 0 ? null === (f = b.organizationList) || void 0 === f ? void 0 : f.map(s=>{
                                    var a;
                                    let {organization: l} = s;
                                    return (0,
                                    t.jsxs)(o.di, {
                                        onSelect: async()=>{
                                            var s;
                                            await b.setActive({
                                                organization: l
                                            }),
                                            y(!1),
                                            N.push("/dashboard"),
                                            N.refresh(),
                                            null === (s = e.afterSwitch) || void 0 === s || s.call(e)
                                        }
                                        ,
                                        className: "group cursor-pointer text-sm",
                                        children: [(0,
                                        t.jsxs)(d.qE, {
                                            className: "mr-2 h-5 w-5 rounded-md",
                                            children: [(0,
                                            t.jsx)(d.F$, {
                                                src: null !== (a = l.imageUrl) && void 0 !== a ? a : "/images/placeholder.png",
                                                alt: l.name
                                            }), (0,
                                            t.jsx)(d.Q5, {
                                                children: l.name.substring(0, 2)
                                            })]
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "truncate",
                                            children: l.name
                                        }), (0,
                                        t.jsx)(i.nQG, {
                                            className: (0,
                                            x.cn)("ml-auto h-5 w-5", (null == E ? void 0 : E.id) === l.id ? "opacity-100" : "opacity-0")
                                        })]
                                    }, l.name)
                                }
                                ) : (0,
                                t.jsx)(o.di, {
                                    className: "text-xs text-muted-foreground",
                                    disabled: !0,
                                    children: "Upgrade to a paid plan to create an organization"
                                })
                            })]
                        })
                    })
                })]
            })
        }
    },
    3613: function(e, s, a) {
        a.r(s),
        a.d(s, {
            MobileDropdown: function() {
                return N
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(8991)
          , r = a(5025)
          , i = a(8733)
          , d = a(5215)
          , c = a(3353)
          , o = a(347)
          , m = a(5254)
          , x = a(1553)
          , u = a(1841)
          , h = a(2001)
          , f = a(1994)
          , p = a(6868)
          , j = a(1313)
          , g = a(4821);
        let v = [{
            title: "Dashboard",
            href: "/dashboard"
        }, {
            title: "Pricing",
            href: "/pricing",
            label: "New"
        }, {
            title: "Docs",
            href: "https://docs.uploadthing.com/",
            external: !0
        }];
        function N(e) {
            let[s,a] = l.useState(!1)
              , N = (0,
            r.usePathname)();
            return l.useEffect(()=>{
                s ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")
            }
            , [s]),
            (0,
            t.jsxs)(j.J2, {
                open: s,
                onOpenChange: a,
                children: [(0,
                t.jsx)(j.xo, {
                    asChild: !0,
                    children: (0,
                    t.jsx)(f.z, {
                        variant: "ghost",
                        className: "hamburger mr-2 flex aspect-square items-center justify-center border-none px-0 shadow-none md:hidden",
                        children: (0,
                        t.jsx)(h.Oq, {
                            className: (0,
                            g.cn)("h-6 w-6", s && "open")
                        })
                    })
                }), (0,
                t.jsxs)(j.yk, {
                    className: "mt-4 h-[calc(100vh-4rem)] w-screen animate-none rounded-none border-none bg-background transition-transform md:hidden",
                    children: [v.map(e=>(0,
                    t.jsx)(o.xp, {
                        asChild: !0,
                        children: (0,
                        t.jsxs)(n.default, {
                            href: e.href,
                            className: (0,
                            g.cn)("flex space-y-3 rounded px-1 py-2 text-base font-medium transition-colors hover:text-foreground/80", e.href === N && "bg-muted text-foreground/80"),
                            target: e.external ? "_blank" : "",
                            rel: e.external ? "noreferrer" : "",
                            children: [e.title, e.label && (0,
                            t.jsx)("span", {
                                className: "ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs text-primary-foreground",
                                children: e.label
                            })]
                        })
                    }, e.href)), (0,
                    t.jsxs)("div", {
                        className: "mt-4 space-y-4 border-t pt-4",
                        children: [(0,
                        t.jsxs)(i.CH, {
                            children: [(0,
                            t.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [(0,
                                t.jsx)(u.WorkspaceSwitcher, {
                                    afterSwitch: ()=>a(!1)
                                }), !!e.appId && e.apps && (0,
                                t.jsx)(x.AppSwitcher, {
                                    appId: e.appId,
                                    apps: e.apps,
                                    afterSwitch: ()=>a(!1)
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0,
                                t.jsx)(d.AM, {
                                    children: (0,
                                    t.jsx)(f.z, {
                                        variant: "destructive",
                                        className: "flex-1",
                                        children: "Sign out"
                                    })
                                }), (0,
                                t.jsxs)(p.Dialog, {
                                    children: [(0,
                                    t.jsx)(p.DialogTrigger, {
                                        asChild: !0,
                                        children: (0,
                                        t.jsx)(f.z, {
                                            size: "icon",
                                            children: (0,
                                            t.jsx)(c.Tk0, {
                                                className: "h-5 w-5"
                                            })
                                        })
                                    }), (0,
                                    t.jsx)(p.DialogContent, {
                                        children: (0,
                                        t.jsx)(m.I, {
                                            className: "h-full max-h-[85vh] overflow-y-auto"
                                        })
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsx)(i.tj, {
                            children: (0,
                            t.jsx)(n.default, {
                                href: "/sign-in",
                                className: (0,
                                g.cn)((0,
                                f.d)({
                                    variant: "destructive"
                                }), "w-full"),
                                children: "Sign in"
                            })
                        })]
                    })]
                })]
            })
        }
    },
    8480: function(e, s, a) {
        a.d(s, {
            F$: function() {
                return d
            },
            Q5: function() {
                return c
            },
            qE: function() {
                return i
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(4744)
          , r = a(4821);
        let i = l.forwardRef((e,s)=>{
            let {className: a, ...l} = e;
            return (0,
            t.jsx)(n.fC, {
                ref: s,
                className: (0,
                r.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a),
                ...l
            })
        }
        );
        i.displayName = n.fC.displayName;
        let d = l.forwardRef((e,s)=>{
            let {className: a, ...l} = e;
            return (0,
            t.jsx)(n.Ee, {
                ref: s,
                className: (0,
                r.cn)("aspect-square h-full w-full", a),
                ...l
            })
        }
        );
        d.displayName = n.Ee.displayName;
        let c = l.forwardRef((e,s)=>{
            let {className: a, ...l} = e;
            return (0,
            t.jsx)(n.NY, {
                ref: s,
                className: (0,
                r.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", a),
                ...l
            })
        }
        );
        c.displayName = n.NY.displayName
    },
    7461: function(e, s, a) {
        a.d(s, {
            $F: function() {
                return c
            },
            AW: function() {
                return f
            },
            Ju: function() {
                return j
            },
            Ph: function() {
                return x
            },
            Qk: function() {
                return o
            },
            TG: function() {
                return h
            },
            VD: function() {
                return g
            },
            Xi: function() {
                return p
            },
            cq: function() {
                return m
            },
            h_: function() {
                return d
            },
            kt: function() {
                return u
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(2063)
          , r = a(3353)
          , i = a(4821);
        let d = n.fC
          , c = n.xz
          , o = n.ZA
          , m = n.Uv
          , x = n.Tr;
        n.Ee;
        let u = l.forwardRef((e,s)=>{
            let {className: a, inset: l, children: d, ...c} = e;
            return (0,
            t.jsxs)(n.fF, {
                ref: s,
                className: (0,
                i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", l && "pl-8", a),
                ...c,
                children: [d, (0,
                t.jsx)(r.XCv, {
                    className: "ml-auto h-4 w-4"
                })]
            })
        }
        );
        u.displayName = n.fF.displayName;
        let h = l.forwardRef((e,s)=>{
            let {className: a, ...l} = e;
            return (0,
            t.jsx)(n.tu, {
                ref: s,
                className: (0,
                i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                ...l
            })
        }
        );
        h.displayName = n.tu.displayName;
        let f = l.forwardRef((e,s)=>{
            let {className: a, sideOffset: l=4, ...r} = e;
            return (0,
            t.jsx)(n.Uv, {
                children: (0,
                t.jsx)(n.VY, {
                    ref: s,
                    sideOffset: l,
                    className: (0,
                    i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                    ...r
                })
            })
        }
        );
        f.displayName = n.VY.displayName;
        let p = l.forwardRef((e,s)=>{
            let {className: a, inset: l, ...r} = e;
            return (0,
            t.jsx)(n.ck, {
                ref: s,
                className: (0,
                i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", l && "pl-8", a),
                ...r
            })
        }
        );
        p.displayName = n.ck.displayName,
        l.forwardRef((e,s)=>{
            let {className: a, children: l, checked: d, ...c} = e;
            return (0,
            t.jsxs)(n.oC, {
                ref: s,
                className: (0,
                i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                checked: d,
                ...c,
                children: [(0,
                t.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    t.jsx)(n.wU, {
                        children: (0,
                        t.jsx)(r.nQG, {
                            className: "h-4 w-4"
                        })
                    })
                }), l]
            })
        }
        ).displayName = n.oC.displayName,
        l.forwardRef((e,s)=>{
            let {className: a, children: l, ...d} = e;
            return (0,
            t.jsxs)(n.Rk, {
                ref: s,
                className: (0,
                i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                ...d,
                children: [(0,
                t.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    t.jsx)(n.wU, {
                        children: (0,
                        t.jsx)(r.J$M, {
                            className: "h-2 w-2 fill-current"
                        })
                    })
                }), l]
            })
        }
        ).displayName = n.Rk.displayName;
        let j = l.forwardRef((e,s)=>{
            let {className: a, inset: l, ...r} = e;
            return (0,
            t.jsx)(n.__, {
                ref: s,
                className: (0,
                i.cn)("px-2 py-1.5 text-sm font-semibold", l && "pl-8", a),
                ...r
            })
        }
        );
        j.displayName = n.__.displayName;
        let g = l.forwardRef((e,s)=>{
            let {className: a, ...l} = e;
            return (0,
            t.jsx)(n.Z0, {
                ref: s,
                className: (0,
                i.cn)("-mx-1 my-1 h-px bg-muted", a),
                ...l
            })
        }
        );
        g.displayName = n.Z0.displayName
    },
    102: function(e, s, a) {
        a.d(s, {
            _: function() {
                return c
            }
        });
        var t = a(6873)
          , l = a(5936)
          , n = a(86)
          , r = a(3401)
          , i = a(4821);
        let d = (0,
        r.j)("text-sm sm:text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-colleading-none flex flex-col gap-1")
          , c = l.forwardRef((e,s)=>{
            let {className: a, ...l} = e;
            return (0,
            t.jsxs)(n.f, {
                ref: s,
                className: (0,
                i.cn)(d(), a),
                ...l,
                children: [(0,
                t.jsxs)("span", {
                    children: [l.children, (0,
                    t.jsx)("span", {
                        children: l.fieldRequired && (0,
                        t.jsx)("span", {
                            className: "text-primary-muted",
                            children: "*"
                        })
                    })]
                }), l.description && (0,
                t.jsx)("span", {
                    className: "text-foreground-muted text-light text-xs",
                    children: l.description
                })]
            })
        }
        );
        c.displayName = n.f.displayName
    }
}]);
`
