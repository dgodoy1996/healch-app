export default function AspectList({ aspects, activeAsp, setActiveAsp, onAspectClick }) {
    const asps = aspects.map(asp =>
        <li
            key={asp.name}
            className={asp.name === activeAsp ? 'active' : '' + "border-2 border-black box-border h-20 w-32 p-4 border-1"}
            onClick={() => onAspectClick(asp._id)}
            >
            {asp.name}
        </li>
    );

    return (
        <ul className="bg-#ccc2b8 grid grid-cols-6 gap-1">
            {asps}
        </ul>
    );
}