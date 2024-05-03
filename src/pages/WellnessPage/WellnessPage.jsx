import { useState, useEffect } from "react";
import AspectList from "../../components/AspectList/AspectList";
import * as aspectsAPI from '../../utilities/aspects-api';
import * as goalsAPI from '../../utilities/goals-api';
import { set } from "mongoose";

export default function HomePage() {

    const [aspects, setAspects] = useState([])
    const [showInput, setShowInput] = useState(null)
    const [goals, setGoals] = useState([])
    // const [addGoals, setAddGoals] = useState([])
    const [newGoal, setNewGoal] = useState("")

    useEffect(function() {
        async function getAspects() {
            const aspects = await aspectsAPI.getAll()
            setAspects(aspects)
        }
        getAspects()
        // getGoals()
    }, [])

    async function getGoals(aspect) {
        const goals = await goalsAPI.getGoals(aspect)
        setGoals(goals)
    }
    console.log(goals)
    function handleAspectClick(aspect) {
        console.log(aspect)
        getGoals(aspect)
        setShowInput(aspect)
    }

    function handleChange(e) {
        setNewGoal(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(goals)
        const goal = {
            name: newGoal,
            aspect: showInput
        }
        const createdGoal = await goalsAPI.createGoals(showInput, goal)
        // setAddGoals([...addGoals, goal])
        setNewGoal('')
        getGoals(showInput)
      };

    if(showInput) {

        return(
            <main className="WellnessPage">
                <h1 className="text-3xl font-bold underline">WellnessPage</h1>
                <aside className="row-span-3">
                    <AspectList
                        aspects={aspects}
                        onAspectClick={handleAspectClick}
                        />   
                </aside>
                <br /><br />
                <div className="form-container + bg-#4a493b" onSubmit={handleSubmit} type="button">
                    <form>
                        <h1>Goals:</h1>
                        <input type="text" name="name" value={newGoal} onChange={handleChange}/>
                        <button className="bg-#4a493b">Submit</button>
                    </form>
                </div>
                <div>
                    <h2>Submitted Goals:</h2>
                    <ul>
                        {goals.map((goal, index) => (
                            <li key={index}>{goal.name}</li>
                        ))}
                    </ul>
                </div>

            </main>
        );
    } else {
        return(
            <main className="WellnessPage">
                <h1 className="text-3xl font-bold underline">WellnessPage</h1>
                    <aside>
                        <AspectList
                            aspects={aspects}
                            onAspectClick={handleAspectClick}
                            />   
                    </aside>
            </main>
        );
    }
}