const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Part = (props) => {
    return (
        <p> {props.name} {props.excercise}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts[0].part1} excercise={props.parts[0].excercise}/>
            <Part name={props.parts[1].part1} excercise={props.parts[1].excercise}/>
            <Part name={props.parts[2].part1} excercise={props.parts[2].excercise}/>

        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const partAndExcercise = [
        {part1: "Fundamentals of React", excercise: 10}, {
            part1: "Using props to pass data",
            excercise: 7
        }, {part1: "State of a component", excercise: 14},
    ]
    return (
        <div>
            <Header name={course}/>
            <Content parts={partAndExcercise}/>
            <Total
                total={partAndExcercise[0].excercise + partAndExcercise[1].excercise + partAndExcercise[2].excercise}/>
        </div>
    )
}

export default App
