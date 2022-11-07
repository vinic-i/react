const Events = () =>{
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("ATIVOU EVENTO")
    };
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Me clique</button>
            </div>
        </div>
    );

};
export default Events