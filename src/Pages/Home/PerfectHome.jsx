import { FaHome } from "react-icons/fa";
import { GiKeyring } from "react-icons/gi";
import { IoDocumentTextSharp } from "react-icons/io5";
import { SiGooglemeet } from "react-icons/si";
const PerfectHome = () => {



    return (
        <div className="my-12" >
            <h2 className="text-4xl ">How It works? <br />
Find a perfect home</h2>
<div className="grid grid-cols-4 gap-4  mt-8 space-y-2">
    <div className="border-r-2 space-y-2">
        <FaHome className="text-4xl "></FaHome >
        <h4 className="font-bold">Find real estate</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>

    </div>
    <div className="border-r-2 space-y-2">
    <SiGooglemeet className="text-4xl "/>

        <h4 className="font-bold">Meet relator</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
    </div>

    <div className="border-r-2 space-y-2">
    <IoDocumentTextSharp className="text-4xl "/>
        <h4 className="font-bold">Documents</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
    </div>
    <div>
        <GiKeyring className="text-4xl space-y-2"></GiKeyring>
        <h4 className="font-bold">Take the keys</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
    </div>

</div>
        </div>
    );
};

export default PerfectHome;