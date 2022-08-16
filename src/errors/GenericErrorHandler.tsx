export type ErrorHandlerProps = {
    error: Error | null;
}

const GenericErrorHandler = (props: ErrorHandlerProps) => {
    const { error } = props;
    return (
        <div role="alert">
            <p>An error occurred:</p>
            <pre>{error?.message}</pre>
        </div>
    )
}

export default GenericErrorHandler;