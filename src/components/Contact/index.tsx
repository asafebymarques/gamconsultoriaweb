'use client'
import { FormEvent, FormEventHandler, useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import { ToastContainer, TypeOptions, toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const formData = {
      name,
      email,
      message
    };
		const success = await sendEmail(formData);
    if(success){
      showNotification("Email enviado!", "success");
      reset();
    } else {
      showNotification("Erro ao enviar email. Tente novamente.", "error");
    }
   }

  function reset() {
    setName("");
    setEmail("");
    setMessage("");
  }

  function showNotification(message: string, type: TypeOptions) {
    try {
      toast(message,  {
        type: type,
      });
    } catch(e) {
      console.log(e);
    }
  }

  async function sendEmail(formData: {name: string, email: string, message: string}) {
    try {
      const apiUrl = "http://localhost:3001/test";
      // await fetch(apiUrl, {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      // });
      return true;
    } catch(e) {
      return false;
    } 
  }

	return (
		<section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4 lg:w-7/12 xl:w-8/12">
						<div
							className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
							data-wow-delay=".15s
              "
						>
							<h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
								Need Help? Open a Ticket
							</h2>
							<p className="mb-12 text-base font-medium text-body-color">
								Our support team will get back to you ASAP via email.
							</p>
							<form onSubmit={submit}>
								<div className="-mx-4 flex flex-wrap">
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="name"
												className="mb-3 block text-sm font-medium text-dark dark:text-white"
											>
												Your Name
											</label>
											<input
												type="text"
												name="name"
                        value={name}
                        onChange={(text) => {setName(text.target.value)}}
												placeholder="Enter your name"
												className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
										</div>
									</div>
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="email"
												className="mb-3 block text-sm font-medium text-dark dark:text-white"
											>
												Your Email
											</label>
											<input
												name="email"
												type="email"
                        value={email}
                        onChange={(text) => {setEmail(text.target.value)}}
												placeholder="Enter your email"
												className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
										</div>
									</div>
									<div className="w-full px-4">
										<div className="mb-8">
											<label
												htmlFor="message"
												className="mb-3 block text-sm font-medium text-dark dark:text-white"
											>
												Your Message
											</label>
											<textarea
												name="message"
												rows={5}
                        value={message}
                        onChange={(text) => {setMessage(text.target.value)}}
												placeholder="Enter your Message"
												className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      ></textarea>
										</div>
									</div>
									<div className="w-full px-4">
										<button type="submit" className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
											Submit Ticket
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="w-full px-4 lg:w-5/12 xl:w-4/12">
						<NewsLatterBox />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
