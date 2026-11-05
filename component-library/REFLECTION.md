# Accessibility Reflection

One accessibility decision I am proud of is using native HTML controls as the
foundation of the library. Buttons, inputs, selects, and checkboxes already
provide reliable keyboard behavior and semantics, so the components add only
the behavior that is needed around them. Each form field generates or accepts
an ID, connects its visible label with `htmlFor`, and connects validation
feedback with `aria-describedby` and `aria-invalid`. This makes the fields
usable for both keyboard users and screen-reader users without requiring
consumers to remember extra wiring.

The trickiest part was the Modal because its accessibility behavior is more
than a visual open/close state. When it opens, I save the currently focused
element and move focus into the dialog. While it is open, a document-level
keyboard handler keeps Tab and Shift+Tab inside the modal, including the edge
case where the dialog has no other focusable controls. Escape closes the
dialog,
and the cleanup function restores focus to the element that opened it. The
dialog also has `role="dialog"`, `aria-modal="true"`, and an accessible name
through `aria-labelledby`. I verified this behavior with keyboard-only
testing instead of relying only on the visual result.

I also documented the default, disabled, error, open, and closed states on the
demo pages. Lighthouse reported an accessibility score of 100 on the
documentation page, and the layout remains usable at narrow and wide
viewport sizes.
