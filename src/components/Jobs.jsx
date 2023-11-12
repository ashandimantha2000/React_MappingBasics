
function Jobs(props) {
  return (
    <div>
        <h1>My Friends</h1>
        {props.fname&&<h2>Name: {props.fname}</h2>}
        <h3>Degree: {props.fdegree}</h3>
        <h3>Occupation: {props.fjob}</h3>
    </div>
  )
}

export default Jobs