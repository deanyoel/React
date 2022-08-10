import "./SingleCar.css";

interface SingleCarProps {
	tozeret_nm:string;
    kinuy_mishari:string;
    mispar_rechev:number;
}

function SingleCar(props: SingleCarProps): JSX.Element {
    return (
        <div className="SingleCar">
			{props.mispar_rechev}<hr/>
            {props.tozeret_nm}<br/>
            {props.kinuy_mishari}<br/>
        </div>
    );
}

export default SingleCar;
