export default function AuctionNewForm({errors, submitForm}) {
  const getDataAndSubmit = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    submitForm({
      title: fd.get("title"),
      description: fd.get("description"),
      ends_at: fd.get("ends_at"),
      reserve_price: fd.get("reserve_price"),
    });
  };

  return (
    <form
      className="NewAuctionForm ui form"
      onSubmit={getDataAndSubmit}
    >
      {errors?.length > 0 ? (
          <div className="ui negative message">
            <div className="header">Failed to create New Auction</div>
            <p>{errors.map((error) => error).join(", ")}</p>
          </div>
        ) : (
          ""
        )}
      <div className="field">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" rows="3" required />
      </div>
      <div className="field">
        <label htmlFor="ends_at">Ends at</label>
        <input type="date" name="ends_at" id="ends_at" required />
      </div>
      <div className="field">
        <label htmlFor="reserve_price">Reserve Price</label>
        <input type="number" name="reserve_price" id="reserve_price" required />
      </div>
      <button className="ui orange button" type="submit">
        Create Auction
      </button>
    </form>
  );
}
