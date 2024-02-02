import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 ',
    small: base + ' py-2 px-4 md:px-4 md:py-2 text-xs',
    secondary:
      'inline-block px-4 py-2.5 md:px-6 md:py-3.5 focus:text-stone-800 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 disabled:cursor-not-allowed focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <div disabled={disabled} className={styles[type]}>
      {children}
    </div>
  );
}

export default Button;