const InputField = (props) => {
    return(
        <div>
            <div class="col-md-4">
            <label for={"inputName"}>{props.type}</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>
        </div>

    );
}

export default InputField;