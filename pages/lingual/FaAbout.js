import Link from "next/link";
import { FaGithub, FaCode, FaPhone } from "react-icons/fa";

export default function FaAbout () {
    return(
        <article className="bg-secondary text-secondary py-10 px-5">
        <h4 className="text-primary text-2xl text-center mb-4">
          فروشگاه اینترنتی کامل ساخته شده با نکست جی اس
        </h4>
        <div className="flex flex-col lg:w-[60%] mx-auto justify-center text-right">
          <section className="my-8 w-3/4 mx-auto border-t-[1px] border-b-[1px] border-secondarycont py-3">
            <p className="text-primary text-xl mb-2">ویژگی های سایت</p>
            <ul className="leading-8 ml-3">
              <li>PWA</li>
              <li>
               دارای پنل مدیریت با قابلتیت ساخت،ویرایش،خوانش و حذف محصولات،سفارشات و دیگر ادمین ها
              </li>
              <li> JWT سرویس ورود خروج بر پایه</li>
              <li>تم روشن و تاریک</li>
              <li>دوزبانه (انگلیسی / فارسی)</li>
              <li>تصویر و فونت بهینه سازی شده</li>
              <li>طراحی واکنشگرا</li>
            </ul>
          </section>
          <section className="mb-8 w-3/4 mx-auto text-sm text-primary leading-7">
            <p className="flex justify-end">
              <a
                href="https://github.com/a-meraji/nextommerce"
                target={"_blank"}
                className="flex"
              >
              <span>در گیت هاب</span>
                <span className="text-accent mx-1.5">سورس کد</span>
                <FaGithub className="mt-1.5" width={20} />
              </a>
            </p>
            <p className="flex justify-end">
              <span className="mr-1.5"> برنامه نویسی از امین معراجی</span>
              <FaCode className="mt-1.5" width={20} />{" "}
            </p>
            <Link href="/contact">
              <a className="flex justify-end">
                <span className="mr-1.5"> تماس با من</span>
                <FaPhone className="mt-1.5" width={20} />{" "}
              </a>
            </Link>
            <p className="text-third text-sm">تمامی لینک های تصاویر از دموی فروشگاه ورسل تهیه شده است</p>
          </section>
        </div>
      </article>
    )
}