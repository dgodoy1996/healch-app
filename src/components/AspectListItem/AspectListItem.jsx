import "./AspectListItem.css";

export default function AspectListItem({ aspect }) {
    return (
      <div>
        <li className="grid grid-cols-4">
          {aspect.name}
        </li>
      </div>
    );
  }
  