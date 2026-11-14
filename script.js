(function () {
      // 1. Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');

      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
          mobileMenu.classList.toggle('hidden');
        });
        mobileLinks.forEach(function (link) {
          link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
          });
        });
      }

      // 2. Dark / Light 2099 Theme Toggle
      const toggleThemeBtn = document.getElementById('toggleThemeBtn');
      const sunIcon = document.getElementById('sunIcon');
      const moonIcon = document.getElementById('moonIcon');

      if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', function () {
          const isDark = document.documentElement.classList.toggle('dark');
          if (isDark) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
          } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
          }
        });
      }

      // 3. Print / Save Flyer Button
      const printFlyerBtn = document.getElementById('printFlyerBtn');
      if (printFlyerBtn) {
        printFlyerBtn.addEventListener('click', function () {
          window.print();
        });
      }

      // 4. Before / After Gallery Filter Tabs
      const stageTabs = document.querySelectorAll('.stage-tab');
      const blockAntes = document.getElementById('blockAntes');
      const blockDepois = document.getElementById('blockDepois');

      stageTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          const stage = tab.getAttribute('data-stage');
          stageTabs.forEach(function (t) {
            t.className = 'stage-tab px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all';
          });
          tab.className = 'stage-tab px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-miguelCrimson text-white transition-all';

          if (stage === 'all') {
            blockAntes.classList.remove('hidden');
            blockDepois.classList.remove('hidden');
          } else if (stage === 'antes') {
            blockAntes.classList.remove('hidden');
            blockDepois.classList.add('hidden');
          } else if (stage === 'depois') {
            blockAntes.classList.add('hidden');
            blockDepois.classList.remove('hidden');
          }
        });
      });
    })();
