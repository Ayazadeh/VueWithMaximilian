Vue.createApp({
<<<<<<< HEAD
    data() {
        return{
            goals: [],
            enteredValue: ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');


=======
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
>>>>>>> 6dde0640207e7c8b81c427c4009041f370bd7ba4

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

<<<<<<< HEAD
// buttonEl.addEventListener('click', addGoal);
=======
// buttonEl.addEventListener('click', addGoal);
>>>>>>> 6dde0640207e7c8b81c427c4009041f370bd7ba4
