import { CardEntrevistas } from "../../../components/CardEntrevistas";

const FeedbackEmp = () => {

    return (
        <div>
            <h1 className="text-left decoration-black text-2xl px-10">Feedback</h1>
            <div className="flex content-center justify-center m-20">
                <div className="flex items-center space-x-8 p10">
                    <div><CardEntrevistas /></div>
                    <div><CardEntrevistas /></div>
                    <div><CardEntrevistas /></div>
                </div>
            </div>
        </div>
        
    );

};

export default FeedbackEmp;