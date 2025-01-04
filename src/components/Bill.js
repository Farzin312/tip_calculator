export default function Bill({ number, value, onChange, children, percent, percentOnChange, friendPercent, friendPercentOnChange }) {
    let content;

    const percentageOptions = [
        { label: "Dissatisfied (0%)", value: 0 },
        { label: "It was okay (5%)", value: 5 },
        { label: "It was good (10%)", value: 10 },
        { label: "Absolutely amazing (20%)", value: 20 },
    ];

    if (number === 1) {
        content = (
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Enter bill value"
            />
        );
    } else if (number === 2) {
        content = (
            <select value={percent} onChange={e => percentOnChange(Number(e.target.value))}>
                {percentageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else if (number === 3) {
        content = (
            <select value={friendPercent} onChange={e => friendPercentOnChange(Number(e.target.value))}>
                {percentageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }


    return (
        <form>
            {children}
            {content}
        </form>
    );
}
