const option = {
    "autohide": false,
};
var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, option)
});

const toast = toastList[0];
toast.show();