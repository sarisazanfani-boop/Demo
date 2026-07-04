import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MessageCircle, Phone, Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/config/site";

const formSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  company: z.string().min(2, "نام شرکت باید حداقل ۲ حرف باشد"),
  phone: z.string().min(10, "شماره تماس معتبر نیست"),
  description: z.string().optional(),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

const TX = { primary: "#2B2A28", secondary: "#6B6863", muted: "#9B9790" };
const BG = { warm: "#FAF8F5", tint: "#F5F3EF", white: "#FFFFFF" };
const BORDER = "#E8E5E0";
const NAVY = "#1a4d8c";
const GOLD = "#C99A2E";

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", phone: "", description: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const msg = `سلام، نامم ${values.name} از شرکت ${values.company} است. شماره تماسم ${values.phone} است. ${values.description || ""}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div>
      {/* Hero — light warm */}
      <section className="py-20 relative overflow-hidden dot-grid" style={{ background: BG.warm }}>
        <div
          className="absolute top-0 right-1/4 w-[350px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(201,154,46,0.07) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: GOLD }}
            >
              شروع همکاری
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4"
              style={{ color: TX.primary }}
            >
              درخواست مشاوره
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed"
              style={{ color: TX.secondary }}
            >
              جلسه آشنایی — دیدن سامانه، برآورد هزینه و پاسخ به سؤالات فنی.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 line-grid" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Info side */}
            <motion.div
              initial="hidden" animate="show" variants={stagger}
              className="lg:col-span-2 space-y-7"
            >
              <motion.div variants={fadeUp} className="space-y-5">
                {[
                  {
                    icon: MessageCircle,
                    title: "ارتباط مستقیم",
                    body: "پس از ارسال فرم، بلافاصله از طریق واتساپ با شما ارتباط می‌گیریم تا زمان جلسه را هماهنگ کنیم.",
                  },
                  {
                    icon: Building2,
                    title: "ویژه شرکت‌های پیمانکاری",
                    body: "این سامانه منحصراً برای شرکت‌های پیمانکاری، مشاور و کارفرمایان عمرانی طراحی شده است.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${NAVY}08`, border: `1px solid ${NAVY}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: NAVY }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: TX.primary }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-6"
                style={{ background: BG.tint, border: `1px solid ${BORDER}` }}
              >
                <p className="text-sm font-semibold mb-3" style={{ color: TX.primary }}>اطلاعات تماس مستقیم</p>
                <div className="flex items-center gap-2 text-sm" dir="ltr" style={{ color: TX.secondary }}>
                  <Phone className="w-4 h-4" />
                  <span>+98 900 000 0000</span>
                </div>
                <p className="text-xs mt-4 leading-relaxed" style={{ color: TX.muted }}>
                  ساعات پاسخگویی: شنبه تا چهارشنبه — ۸ صبح تا ۵ عصر
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3 rounded-2xl p-7 md:p-9"
              style={{
                background: BG.white,
                border: `1px solid ${BORDER}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{ color: TX.primary }}>نام و نام خانوادگی</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="مثال: علی رضایی"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{ color: TX.primary }}>نام شرکت</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="شرکت پیمانکاری..."
                              data-testid="input-company"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium" style={{ color: TX.primary }}>شماره تلفن (دارای واتساپ)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="09120000000"
                            type="tel"
                            dir="ltr"
                            className="text-left"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium" style={{ color: TX.primary }}>توضیحات کوتاه (اختیاری)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="تعداد پرسنل، نوع پروژه‌ها یا نیازهای خاص خود را بنویسید..."
                            className="min-h-[110px] resize-none"
                            data-testid="textarea-description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    data-testid="button-submit-contact"
                    className="w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200"
                    style={{
                      background: NAVY,
                      color: "#fff",
                      boxShadow: `0 4px 16px ${NAVY}30`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#163f75";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 20px ${NAVY}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = NAVY;
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 4px 16px ${NAVY}30`;
                    }}
                  >
                    ارسال و ارتباط در واتساپ
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-center" style={{ color: TX.muted }}>
                    پس از ارسال، از طریق واتساپ با شما تماس می‌گیریم.
                  </p>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
