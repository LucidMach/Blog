type Section = {
  name: string;
  title: string;
  subtitle: string;
  cta: string;
  icon: React.ReactNode;
};

const sections: Section[] = [
  {
    name: "home",
    title: "LucidMach",
    subtitle: "dream it... build it!",
    cta: "swipe cube to explore sections",
    icon: (
      <svg
        className="bg-transparent"
        width="30"
        height="30"
        viewBox="0 0 308 350"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M306.205 87.0588L153.53 0L0.233406 87.4131L63.0089 123.394L153.53 71.7879L242.301 122.396L306.205 87.0588ZM244.131 124.812L307.06 90.0142V262.639L156.206 348.659V276.871L244.131 226.745V124.812ZM153.206 278.212L153.206 350L0 262.639V90.7372L62.9283 126.806V226.745L153.206 278.212Z"
          fill="#1A1A1A"
        />
      </svg>
    ),
  },
  {
    name: "blog",
    title: "LucidBlog",
    subtitle: "ideas and learnings!",
    cta: "double click cube to go to /blog",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="bg-transparent"
      >
        <path d="M19 6.734c0 4.672-4.25 7.079-4.25 12.266h-5.5c0-5.187-4.25-7.594-4.25-12.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4.75 13.266h-4.5c-.276 0-.5.224-.5.5s.224.5.5.5h4.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-5l1.451 1.659c.19.216.464.341.753.341h.593c.288 0 .563-.125.752-.341l1.451-1.659z" />
      </svg>
    ),
  },
  {
    name: "about",
    title: "about me",
    subtitle: "curious/lofi pro",
    cta: "double click cube to go to /about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="bg-transparent"
      >
        <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z" />
      </svg>
    ),
  },
  {
    name: "archive",
    title: "archive",
    subtitle: "evolution of this page",
    cta: "double click cube to go to /archive",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="bg-transparent"
      >
        <path d="M17.313 5.998c.242.216.473.445.687.688l-1.165 1.166-.332-.356-.356-.331 1.166-1.167zm-2.653-1.56c.308.107.608.234.897.378l-.643 1.52c-.167-.088-.341-.168-.52-.239l-.373-.14.639-1.519zm-3.146-.438h.973v1.648l-.487-.018-.486.019v-1.649zm-2.125.419l.631 1.524-.416.153c-.165.067-.326.141-.483.22l-.63-1.524c.288-.142.59-.267.898-.373zm.716 6.829l1.045-1.045-1.463-1.466c.652-.464 1.451-.738 2.313-.738 2.21 0 4 1.791 4 4.001 0 2.209-1.79 3.999-4 3.999s-4-1.79-4-3.999c0-.813.242-1.567.658-2.199l1.447 1.447zm-3.418-5.25l1.167 1.166-.357.331-.332.357-1.165-1.166c.214-.243.445-.472.687-.688zm-1.871 2.443l1.52.641c-.087.168-.168.343-.238.52l-.14.376-1.52-.641c.109-.309.235-.608.378-.896zm-.816 3.07h1.649l-.019.485.019.486h-1.649v-.971zm.42 3.094l1.524-.63.153.417.219.48-1.524.632c-.141-.289-.266-.59-.372-.899zm2.13 3.527l-.688-.687 1.303-1.304.332.356.356.331-1.303 1.304zm2.79 1.43c-.308-.108-.608-.234-.897-.379l.643-1.52c.167.088.341.169.52.239l.375.14-.641 1.52zm3.146.438h-.973v-1.649l.486.019.486-.019v1.649zm2.124-.42l-.63-1.525.415-.152c.165-.066.326-.14.483-.22l.63 1.523c-.287.143-.589.268-.898.374zm2.703-1.586l-1.167-1.165.356-.331.332-.356 1.166 1.165c-.214.244-.445.473-.687.687zm1.871-2.441l-1.521-.643c.087-.168.169-.341.239-.518l.14-.378 1.52.642c-.109.307-.235.608-.378.897zm.816-3.071h-1.649l.019-.486-.019-.485h1.649v.971zm-1.944-2.464l-.153-.416-.219-.483 1.524-.629c.141.288.266.59.372.897l-1.524.631zm-6.056-8.018c5.514 0 10 4.486 10 10s-4.486 9.999-10 9.999-10-4.485-10-9.999 4.486-10 10-10zm0-2c-6.632 0-12 5.366-12 12 0 6.631 5.367 11.999 12 11.999 6.632 0 12-5.366 12-11.999 0-6.632-5.367-12-12-12z" />
      </svg>
    ),
  },
];

export default sections;
