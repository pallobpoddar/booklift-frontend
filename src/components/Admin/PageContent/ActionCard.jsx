import "./ActionCard.scss";
import { Link } from "react-router-dom";

const ActionCard = ({ title, path }) => {
	return (
		<div className="action-card">
			<Link to={path} className="link-style">
				<h2>{title}</h2>
			</Link>
		</div>
	);
};

export default ActionCard;
