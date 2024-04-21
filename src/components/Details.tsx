import './detail.css'

interface detailsProps{
    title: string;
    description?: string;
    items?: string[];
}

function Details({title,description,items}: detailsProps){
    if(!items){
        return;
    }
    return (
        <div className="details-container">
            <h2 className='ttt'>{title}</h2>
            <p className='ddd'>{description}</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Details;