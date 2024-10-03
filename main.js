$("#form-content").validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 50
      },
      email:{
        required:true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      age: {
        required: true,
        range:[18,120]
      },
      gender: {
        required: true
      },
      address: {
        required: false,
        maxlength:50
      }
    },
    messages: {
      username: {
        required: "*",
        minlength: "Username should be at least 3 characters",
        maxlength: "Username should not exceed 10 characters"
      },
      email: {
        required: "*"
      },
      phone: {
        required: "*",
        minlength: "Phone number should be exactly 10 digits",
        maxlength: "Phone number should be exactly 10 digits"
      },
      age: {
        required: "*",
        
      },
      gender: {
        required: "*"
      },
      address: {
        required: "not required",
        maxlength:"Address should not exceed 50 characters"
      }
    }
  });
  