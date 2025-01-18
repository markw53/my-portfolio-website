<script>

</script>

<div id="accordionExample">
    <div
      class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
      <h2 class="mb-0" id="headingOne">
        <button
          class="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
          type="button"
          data-twe-collapse-init
          data-twe-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne">
          Accordion Item #1
          <span
            class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="!visible"
        data-twe-collapse-item
        data-twe-collapse-show
        aria-labelledby="headingOne"
        data-twe-parent="#accordionExample">
        <div class="px-5 py-4">
          <strong>This is the first item's accordion body.</strong> It is
          shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div
      class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
      <h2 class="mb-0" id="headingTwo">
        <button
          class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
          type="button"
          data-twe-collapse-init
          data-twe-collapse-collapsed
          data-twe-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo">
          Accordion Item #2
          <span
            class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="!visible hidden"
        data-twe-collapse-item
        aria-labelledby="headingTwo"
        data-twe-parent="#accordionExample">
        <div class="px-5 py-4">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div
      class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
      <h2 class="accordion-header mb-0" id="headingThree">
        <button
          class="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
          type="button"
          data-twe-collapse-init
          data-twe-collapse-collapsed
          data-twe-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree">
          Accordion Item #3
          <span
            class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id="collapseThree"
        class="!visible hidden"
        data-twe-collapse-item
        aria-labelledby="headingThree"
        data-twe-parent="#accordionExample">
        <div class="px-5 py-4">
          <strong>This is the third item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>


  <div id="experienceAccordion">
    <div class="border border-highlight bg-primary hover:bg-highlight dark:border-neutral-600 dark:bg-body-dark">
        <h2 class="mb-0" id={`heading ${experience.id}`}>
            <div id="jobinfo" class="flex justify-between items-center p-4">
                <div class="flex-1">
                    <div class="flex items-center">
                        <div class="p-4">
                            <img class="w-1/2" src={experience.photo.src} alt={experience.photo.alt}>
                        </div>
                        <div class="ml-4">
                            <p class="text-xl font-bold">{experience.jobTitle}</p>
                            <p class="mt-2">{`${experience.company}, ${experience.location} (${experience.startDate} - ${experience.endDate})`}</p>
                        </div>
                    </div>
                </div>
                <!-- Move the button here to the right of the job info -->
                <button
                    class="group relative flex items-center border-0 bg-primary px-5 py-4 text-left text-base text-secondary transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-highlight [&:not([data-twe-collapse-collapsed])]:text-secondary [&:not([data-twe-collapse-collapsed])]:shadow-border dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-secondary dark:[&:not([data-twe-collapse-collapsed])]:shadow-primary/10"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target={`#collapse${experience.id}`}
                    aria-expanded={experience.id === 1 ? "true" : "false"}
                    aria-controls={`collapse${experience.id}`}
                    data-twe-collapse-collapsed={experience.id !== 1 ? true : undefined}>
                    <span class={`-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none ${experience.id !== 1 ? 'rotate-0' : 'rotate-[-180deg]'} group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
            </div>
        </h2>
        <div
            id={`collapse${experience.id}`}
            class={`grid grid-cols-8 bg-highlight ${experience.id === 1 ? "!visible" : "!visible hidden"}`}
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby={`heading ${experience.id}`}
            data-twe-parent="#experienceAccordion">
            <span class="col-span-1"></span>
            <span class="col-span-7 p-4">
                {#each experience.description as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </span>
        </div>
    </div>
</div>
