# enic-test
1. 1.js
2. https://github.com/sod-21/innor_survey/blob/master/quiz-builder/src/components/QuestionsPanel.js
https://github.com/sod-21/green-house-calculator/blob/main/src/components/App.tsx
3. https://github.com/sod-21/innor_survey/blob/master/quiz-builder/src/App.js
https://github.com/sod-21/green-house-calculator/blob/main/src/components/Result.tsx
4. 

    1. in the constructor, it should add "super(props)";
    1.1 this.clickHandler = this.clickHandler.bind(this);
    2. in the this.clickHandler function
       this.clicks => this.state.clicks
    3. In the render function 
      There are more "}" . 
      <h2>My Component ({this.state.clicks} clicks})</h2>
      we have to remove clicks } or {'}'}


5. Reach Hooks
const [counter, setCounter] = useState(0);
const {increment} = props;

const UpdateCounter = () => {
    setCounter( counter + increment);
};

