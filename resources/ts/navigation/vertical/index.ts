export default [
  {
    title: 'Dasbor',
    to: { name: 'dashboard' },
    icon: { icon: 'tabler-smart-home' },
    action: 'read',
    subject: 'AclDemo',
  },
  { heading: 'Manajemen' },
  {
    title: 'Karyawan',
    to: { name: 'apps-user-list' },
    icon: { icon: 'tabler-users-group' },
  },
  {
    title: 'Aktifitas',
    to: { name: 'apps-activities-list' },
    icon: { icon: 'tabler-activity' },
    action: 'read',
    subject: 'AclDemo',
  },
  {
    title: 'Slip Gaji',
    to: { name: 'apps-payslip-list' },
    icon: { icon: 'tabler-briefcase' },
  },
  { heading: 'Pengaturan' },
  {
    title: 'Master Data',
    to: { name: 'data-master-list' },
    icon: { icon: 'tabler-database' },
    action: 'read',
    subject: 'AclDemo',
  },
]
