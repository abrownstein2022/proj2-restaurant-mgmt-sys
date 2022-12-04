

const newFormHandler = async (event) => {
  event.preventDefault();

  const itemid = document.querySelector('#item_id').value;
  const qty = document.querySelector('#quantity').value;
  //const description = document.querySelector('#project-desc').value.trim();

  if (itemid && qty) {
    const response = await fetch(`/api/orders`, {
      method: 'POST',
      body: JSON.stringify({ itemid, qty}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/orders');
    } else {
      alert('Failed to create order');
    }
  }
};

document
  .querySelector('#myOrderform')
  .addEventListener('submit', newFormHandler);


