import { useState, useEffect,useCallback } from "react";
import LocalizedStrings from "react-localization";
import { useHistory } from "react-router-dom";
import styles from "./SubscriptionsStyles.module.css";
import ru from "../../assets/languages/RU.json";
import en from "../../assets/languages/EN.json";
import uk from "../../assets/languages/UA.json";

const languageObj = {
  en,
  ru,
  uk,
};

export const Subscriptions = () => {
  const history = useHistory();
  const path = history.location.pathname?.substr(1, 2);

  let locale = new LocalizedStrings(languageObj)
    .getInterfaceLanguage()
    .substr(0, 2);

  const [choose, setChoose] = useState(locale);

  const handlePath =useCallback( (str) => {
    history.push(`/${str}`);
    setChoose(str);
  },[history]);

  useEffect(() => {
    path ? handlePath(path) : history.push(`/${locale}`);
  }, [handlePath,history,locale,path]);

  const handleChoose = (e) => {
    const lang = e.target.value;
    setChoose(lang);
    history.push(`/${lang}`);
  };

  const value = languageObj[choose] || languageObj["en"];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <ul className={styles.linkList}>
              <li className={styles.linkListTitle}>
                <a href="#start" className={styles.linkToItem}>
                  {value.aside1}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#fees" className={styles.linkToItem}>
                  {value.aside2}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#paid" className={styles.linkToItem}>
                  {value.aside3}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#subscriptions" className={styles.linkToItem}>
                  {value.aside4}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#payment" className={styles.linkToItem}>
                  {value.aside5}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#canceling" className={styles.linkToItem}>
                  {value.aside6}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#refund" className={styles.linkToItem}>
                  {value.aside7}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#changes" className={styles.linkToItem}>
                  {value.aside8}
                </a>
              </li>
            </ul>
          </aside>
          <div className={styles.content}>
            <h1 id="start" className={styles.documentTitle}>
              {value.aside1}
              <div className={styles.alertText}>{value.titleMain}</div>
              <select
                className={styles.languageSelect}
                name="language"
                size="1"
                value={choose}
                onChange={handleChoose}
              >
                <option value="en">on english</option>
                <option value="ru">по-русски</option>
                <option value="uk">українською</option>
              </select>
            </h1>

            <h2 id="fees">{value.aside2}</h2>
            <p>{value.p1}</p>
            <ul className={styles.list}>
              <li>{value.p2}</li>
              <li>{value.p3}</li>
              <li>{value.p4}</li>
            </ul>
            <h2 id="paid">{value.aside3}</h2>
            <p>{value.p5}</p>
            <h2 id="subscriptions">{value.aside4}</h2>
            <p>{value.p6}</p>
            <h2 id="payment">{value.aside5}</h2>
            <p>{value.p7}</p>
            <h2 id="canceling">{value.aside6}</h2>
            <p>{value.p8}</p>
            <p>
              {value.p9}
              <a
                href={value.appleSupportLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>{value.p10}</span>
              </a>
            </p>
            <p>
              {value.p11}
              <a
                href={value.googleSupportLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>{value.p12}</span>
              </a>
            </p>
            <h2 id="refund">{value.aside7}</h2>
            <p>
              {value.p13}
              <a
                href={value.appleRefundLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>{value.p14}</span>
              </a>
            </p>
            <p>
              {value.p15}
              <a
                href={value.googleRefundLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>{value.p16}</span>
              </a>
            </p>
            <p>{value.p17}</p>
            <h2 id="changes">{value.aside8}</h2>
            <p>{value.p18}</p>
            <p>
              {value.p19}
              <a
                href="mailto:kidhab@goit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>kidhab@goit.com</span>
              </a>
              {value.p20}
              <a
                href="https://www.kid-hab.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>
                  https://www.kid-hab.com/
                </span>
              </a>
            </p>
            <p>{value.p21}</p>
          </div>
        </div>
      </div>
    </>
  );
};
