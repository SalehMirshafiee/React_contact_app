function ContactItem({ data: { id, name, lastName, email, phone } }) {
  return (
    <li key={id}>
      <p>
        <span>👤</span> {name} {lastName}
      </p>
      <p>
        <span>📫</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button>🗑️</button>
    </li>
  );
}

export default ContactItem;
