
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref legacyBehavior>
              <a>Ana Sayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/users" passHref legacyBehavior>
              <a>Kullanıcılar</a>
            </Link>
          </li>
          <li>
            <Link href="/posts" passHref legacyBehavior>
              <a>Postlar</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
