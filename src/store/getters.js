export default {
  platform: state => state.ui.currentPlatform,
  isSideBarVisible: state => state.ui.sideBarVisible,

  profile: state => state.profile.data,

  isScheduleLoading: state => state.schedule.loading,
  schedule: state => state.schedule.data,
  currentWeek: state => state.schedule.currentWeek
}
