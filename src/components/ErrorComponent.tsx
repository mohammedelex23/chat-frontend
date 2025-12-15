

export function ErrorComponent(props: {message: string}) {
    return(
        <p className="text-danger text-sm">{props.message}</p>
    )
}