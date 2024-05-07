import { useState, useEffect } from "react";
import AspectList from "../../components/AspectList/AspectList";
import * as aspectsAPI from '../../utilities/aspects-api';
import * as goalsAPI from '../../utilities/goals-api';
import * as habitsAPI from '../../utilities/habits-api';

export default function WellnessPage() {

    const [aspects, setAspects] = useState([])
    const [goalInput, setGoalInput] = useState(null)
    const [habitInput, setHabitInput] = useState(null)
    const [goals, setGoals] = useState([])
    const [habits, setHabits] = useState([])
    const [newGoal, setNewGoal] = useState("")
    const [newHabit, setNewHabit] = useState("")
    const [activeAsp, setActiveAsp] = useState(null)

    useEffect(function() {
        async function getAspects() {
            const aspects = await aspectsAPI.getAll()
            setAspects(aspects)
        }
        getAspects()
    }, [])

    async function getGoals(aspect) {
        const goals = await goalsAPI.getGoals(aspect)
        setGoals(goals)
    }

    async function getHabits(aspect) {
        const habits = await habitsAPI.getHabits(aspect)
        setHabits(habits)
    }

    function handleAspectClick(aspect) {
        setActiveAsp(aspect)
        getGoals(aspect)
        setGoalInput(aspect)
        getHabits(aspect)
        setHabitInput(aspect)
    }

    function handleGoalChange(e) {
        setNewGoal(e.target.value)
    }

    function handleHabitChange(e) {
        setNewHabit(e.target.value)
    }

    async function handleGoalSubmit(e) {
        e.preventDefault();
        console.log(goals)
        const goal = {
            name: newGoal,
            aspect: goalInput
        }
        const createdGoal = await goalsAPI.createGoals(goalInput, goal)
        setNewGoal('')
        getGoals(goalInput)
      };

      async function handleHabitSubmit(e) {
        e.preventDefault()
        const habit = {
            name: newHabit,
            aspect: habitInput
        }
        const createdHabit = await habitsAPI.createHabits(habitInput, habit)
        setNewHabit('')
        getHabits(habitInput)
      }

    if(goalInput || habitInput) {

        return(
            <main className="WellnessPage">
                <br />
                <aside>
                    <AspectList
                        aspects={aspects}
                        activeAsp={activeAsp}
                        onAspectClick={handleAspectClick}
                    />   
                </aside>
                <br /><br />
                <div className="flow-root">
                    <div className="float-left absolute left-40">
                        <div className="form-container + max-w-sm mx-auto" onSubmit={handleHabitSubmit} type="button">
                            <form>
                                <div>
                                    <h1>Enter Your Habits:</h1>
                                    <input type="text" name="name" value={newHabit} onChange={handleHabitChange}/>
                                    <button className="bg-#4a493b content-center">Submit</button>
                                    <br />
                                </div>
                                <div>
                                    <h2>Habits:</h2>
                                    <ul>
                                        {habits.map((habit, index) => (
                                            <li key={index}>{habit.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="float-right absolute right-40">
                            <div className="form-container + max-w-sm mx-auto" onSubmit={handleGoalSubmit} type="button">
                                <form>
                                    <div>
                                    <h1>Enter Your Goals:</h1>
                                    <input type="text" name="name" value={newGoal} onChange={handleGoalChange}/>
                                        <button className="bg-#4a493b content-center">Submit</button>
                                        <br />
                                    </div>
                                    <div>
                                        <h2>Goals:</h2>
                                        <ul>
                                            {goals.map((goal, index) => (
                                                <li key={index}>{goal.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </main>
        );
    } else {
        return(
            <main className="WellnessPage">
                    <br />
                    <aside>
                        <AspectList
                            aspects={aspects}
                            activeAsp={activeAsp}
                            onAspectClick={handleAspectClick}
                            />   
                    </aside>
            </main>
        );
    }
}