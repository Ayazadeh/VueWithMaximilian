export default {
    coaches: state => state.coaches,
    hasCoaches: state => state.coaches && state.coaches.length > 0,
}
