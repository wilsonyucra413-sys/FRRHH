interface LabelProps{
    texto:string;
}
export function Label(props:LabelProps){
    return <p className="label-info">{props.texto}</p>;
}