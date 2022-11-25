
const colours = ["#282728", "#292929", "#2B2B2B", "#2C2D2D", "#2E2F2F", "#2F3131", "#313333", "#323535", "#343837", "#353A39", "#373C3A", "#383E3C", "#3A403E", "#3C4240", "#3D4442", "#3F4744", "#404946", "#424B48", "#434D4A", "#454F4C", "#46514D", "#48534F", "#495551", "#4B5853", "#4D5A55", "#4E5C57", "#505E59", "#51605B", "#53625D", "#54645F", "#566760", "#576962", "#596B64", "#5A6D66", "#5C6F68", "#5D716A", "#5F736C", "#61766E", "#627870", "#647A72", "#657C73", "#677E75", "#688077", "#6A8279", "#6B847B", "#6D877D", "#6E897F", "#708B81", "#728D83", "#738F85", "#759186", "#769388", "#78968A", "#79988C", "#7B9A8E", "#7C9C90", "#7E9E92", "#7FA094", "#81A296", "#83A598"]

export function DefaultLayout(props: Props) {
  return (
    <div class="w-screen h-screen absolute">
      <div class="flex justify-center items-center absolute inset-0">
        <GameOfLifeCanvas client:load colours={colours} />
        <slot />
      </div>
      <Header class="justify-end h-16 items-center px-6">
        <div class="flex flex-row bg-zinc-200 shadow-lg shadow-slate-900 rounded-lg gap-4 px-4 py-2">
          <a href={githubUrl} target="_blank">
            <GithubIcon class={iconStyle} />
          </a>
          <a href={twitterUrl} target="_blank">
            <TwitterIcon class={iconStyle} />
          </a>
          <a href={linkedinUrl} target="_blank">
            <LinkedinIcon class={iconStyle} />
          </a>
        </div>
      </Header>
    </div>
  );
}
