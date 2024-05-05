export default function AspectList({ aspects, activeAsp, setActiveAsp, onAspectClick }) {
    const asps = aspects.map(asp =>
        <li
            key={asp.name}
            className={`border-2 border-black box-border h-20 p-4 border-1 text-xl hover:bg-stone-700  ${asp._id === activeAsp ? 'active' : ''}`}
            onClick={() => onAspectClick(asp._id)}
            >
            {asp.name}
        </li>
    );

    return (
        <ul className="grid grid-cols-6">
            {asps}
        </ul>
    );
}