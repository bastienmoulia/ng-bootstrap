import { Component, inject } from '@angular/core';
import { NgbScrollSpyModule, NgbScrollSpyService } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-scrollspy-service',
	imports: [NgbScrollSpyModule],
	templateUrl: './scrollspy-service.html',
	providers: [NgbScrollSpyService],
})
export class NgbdScrollSpyService {
	fragments = ['basic', 'items', 'service', 'nested', 'navbar'];

	// we're getting two scrollspies: from current component and 'root'
	scrollSpy = inject(NgbScrollSpyService);
	rootScrollSpy = inject(NgbScrollSpyService, { skipSelf: true });

	constructor() {
		// `.start()` should be called when you're sure all fragments are in DOM
		// in some cases it might be done in `ngAfterViewInit`, parent component, etc.
		// You can also add fragments later dynamically with `scrollSpy.observe(fragment)`.
		//
		// In this specific case our fragments DOM ('basic', 'items', etc.) is generated by sibling demo components, so we should
		// start scrollspy after parent view is initialized (ideally) OR later when zone is stable OR even later with a promise/microtask:
		queueMicrotask(() => {
			this.scrollSpy.start({
				fragments: this.fragments,
			});
		});

		// Calling `.stop()` will be optional in many cases, as we:
		// - inject `DestroyRef` internally to clean up
		// - clean everything up when calling `.start()`
		//
		// Again this will depend on where your scrollspy instance comes from. Here cleanup is not necessary, as scrollspy is
		// provided by current component and will be destroyed along with it. Similar to:
		//
		// inject(DestroyRef).onDestroy(() => this.scrollSpy.stop());
	}
}
