const navigation = () => {
  return [
    {
      title: 'Home',
      icon: 'tabler:smart-home',
      path: '/home',
      action: 'read',
      subject: 'home-page'
    },
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      path: '/dashboards/admin'
    }
    // ,
    // {
    //   sectionTitle: 'Camps & Users'
    // },
    // {
    //   title: 'Users',
    //   icon: 'tabler:user',
    //   action: 'read',
    //   subject: 'camp-user-page',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/user/list',
    //       icon: 'tabler:user',
    //       action: 'read',
    //       subject: 'camp-user-page'
    //     }
    //   ]
    // },
    // {
    //   title: 'Camps',
    //   icon: 'icon-park-outline:camp',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/camp'
    //     }
    //   ]
    // },
    // {
    //   title: 'Settings',
    //   icon: 'iconoir:settings',
    //   children: [
    //     {
    //       title: 'Role',
    //       path: '/role',
    //       icon: 'carbon:user-role',
    //       action: 'read',
    //       subject: 'camp-user-role-page'
    //     }
    //   ]
    // }
  ]
}

export default navigation
