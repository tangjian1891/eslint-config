function Name(params) {
  console.log(Name === new.target);
}

new Name();
