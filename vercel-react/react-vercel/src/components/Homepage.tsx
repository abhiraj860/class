interface Homepage {
    title?: string;
}

export default function Homepage({title}: Homepage) {
    return <div>
       <h1>{title ?  title : 'Default title'}</h1> 
    </div>
}