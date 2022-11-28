const Password = (props) => {
    return (
        <>
            <label htmlFor="pass">Password:</label>
            <input
                type="password"
                placeholder="******"
                name="pass"
                id="pass"
                value={props.password}
                onChange={props.handleValue}
                required
            ></input>
        </>
    );
};
