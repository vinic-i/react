const Challenge = () =>{
    const a = 2;
    const b = 3;
    const handleMyEvent = () => {
        console.log(a+b)
    };
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Button Challenge</button>
            </div>
        </div>
    );

};
export default Challenge