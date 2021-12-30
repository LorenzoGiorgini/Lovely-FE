

function ButtonGroup({options, info , form, setForm}) {

    return (
        <div className="flex">
            {form && options.map((option, index) => {
                return (
                    <button key={index + "index"} className={`p-2 mr-2 bg-white rounded-lg ${option === form[info] && "outline-dotted" } border-pink-500 text-pink-500`} value={option} onClick={(e) => setForm({ ...form , [info]: e.target.value })}>{option}</button>
                )
            })} 
        </div>
    )
}



export default ButtonGroup