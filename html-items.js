const settingsItem = `<div class="item-settings">
                            <div class="settings-icon">⚙</div>
                            <div class="settings-menu">
                                <div class="settings-menu-item" data-action="duplicate">Duplicate</div>
                                <div class="settings-menu-item" data-action="moveup">Move Up</div>
                                <div class="settings-menu-item" data-action="movedown">Move Down</div>
                                <div class="settings-menu-item delete" data-action="delete">Delete</div>
                            </div>
                        </div>`

const items = {
    navbar: {
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}
                <nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: #333;">
                    <span contenteditable="true" style="color: #fff; font-size: 1.5rem; font-weight: bold;">Logo</span>
                    <div style="display: flex; gap: 1rem;" class="nav-items">
                        <span contenteditable="true" style="color: #fff;">Home</span>
                        <span contenteditable="true" style="color: #fff;">About</span>
                        <span contenteditable="true" style="color: #fff;">Services</span>
                        <span contenteditable="true" style="color: #fff;">Contact</span>
                    </div>
                </nav>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="new-nav-item">New nav item</div>`
    },

    hero: { 
        html: `<div class="builder-item">
                    <div class="drag-handle">⋮⋮</div>
                    ${settingsItem}
                    <div style="width: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 5rem 2rem; text-align: center;">
                        <h1 contenteditable="true" style="color: #fff; font-size: 3rem; margin-bottom: 1rem;">Welcome to Our Site</h1>
                        <div class="paragraphs">
                            <p contenteditable="true" style="color: rgba(255,255,255,0.9); font-size: 1.25rem; margin-bottom: 2rem;">Your amazing tagline goes here</p>
                        </div>
                        <div class="buttons">
                            <button contenteditable="true" style="background: #fff; color: #667eea; border: none; padding: 0.75rem 2rem; font-size: 1rem; border-radius: 5px; cursor: pointer;">Get Started</button>
                        </div>
                    </div>
                </div>`,
        settings:  `<div class="settings-menu-item" data-action="add-paragraph">Add Paragraph</div>
                    <div class="settings-menu-item" data-action="add-button">Add Button</div>
                    <div class="settings-menu-item" data-action="add-image">Add Image</div>`
    },

    section: {
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}
                <div style="width: 100%; background: #f5f5f5; padding: 3rem; text-align: center;">
                    <h3 contenteditable="true">Your Section Title</h3>
                    <div class="paragraphs">
                        <p contenteditable="true">This is your Section description</p>
                    </div>
                    <div class="buttons">
                    </div>
                </div>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="add-paragraph">Add Paragraph</div>
                    <div class="settings-menu-item" data-action="add-button">Add Button</div>
                    <div class="settings-menu-item" data-action="add-image">Add Image</div>`
    },
    features: {
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}
                <div style="display: flex; gap: 2rem; padding: 3rem; background: #fff;" class="features">
                    <div style="flex: 1; text-align: center;">
                        <div contenteditable="true" style="font-size: 2rem;">🚀</div>
                        <h4 contenteditable="true">Feature One</h4>
                        <p contenteditable="true">Description here</p>
                    </div>
                    <div style="flex: 1; text-align: center;">
                        <div contenteditable="true" style="font-size: 2rem;">💡</div>
                        <h4 contenteditable="true">Feature Two</h4>
                        <p contenteditable="true">Description here</p>
                    </div>
                    <div style="flex: 1; text-align: center;">
                        <div contenteditable="true" style="font-size: 2rem;">⭐</div>
                        <h4 contenteditable="true">Feature Three</h4>
                        <p contenteditable="true">Description here</p>
                    </div>
                </div>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="new-feature">New Feature</div>`
    },

    testimonials: { 
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}            
                <div style="background: #f8f9fa; padding: 3rem;">
                    <h3 contenteditable="true" style="text-align: center; margin-bottom: 2rem;">What Our Clients Say</h3>
                    <div style="display: flex; gap: 2rem;" class="testimonials">
                        <div style="flex: 1; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <p contenteditable="true" style="font-style: italic; margin-bottom: 1rem;">"Amazing service! Highly recommended."</p>
                            <span contenteditable="true" style="font-weight: bold;">- John Doe</span>
                        </div>
                        <div style="flex: 1; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <p contenteditable="true" style="font-style: italic; margin-bottom: 1rem;">"Best decision we ever made for our business."</p>
                            <span contenteditable="true" style="font-weight: bold;">- Jane Smith</span>
                        </div>
                    </div>
                </div>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="add-testimonial">Add testimonial</div>`
    },

    pricing: {
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}
                <div style="padding: 3rem; background: #fff;">
                    <h3 contenteditable="true" style="text-align: center; margin-bottom: 2rem;">Pricing Plans</h3>
                    <div style="display: flex; gap: 2rem; justify-content: center;" class="pricing-plans">
                        <div style="flex: 1; max-width: 280px; border: 1px solid #ddd; border-radius: 8px; padding: 2rem; text-align: center;">
                            <h4 contenteditable="true">Basic</h4>
                            <div contenteditable="true" style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">$9</div>
                            <p contenteditable="true" style="color: #666;">/month</p>
                            <div style="margin: 1.5rem 0; text-align: left;">
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature one</p>
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature two</p>
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature three</p>
                            </div>
                            <button contenteditable="true" style="width: 100%; padding: 0.75rem; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Choose Plan</button>
                        </div>
                        <div style="flex: 1; max-width: 280px; border: 2px solid #667eea; border-radius: 8px; padding: 2rem; text-align: center; transform: scale(1.05);">
                            <h4 contenteditable="true">Pro</h4>
                            <div contenteditable="true" style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">$29</div>
                            <p contenteditable="true" style="color: #666;">/month</p>
                            <div style="margin: 1.5rem 0; text-align: left;">
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Everything in Basic</p>
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature four</p>
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature five</p>
                            </div>
                            <button contenteditable="true" style="width: 100%; padding: 0.75rem; background: #667eea; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Choose Plan</button>
                        </div>
                        <div style="flex: 1; max-width: 280px; border: 1px solid #ddd; border-radius: 8px; padding: 2rem; text-align: center;">
                            <h4 contenteditable="true">Enterprise</h4>
                            <div contenteditable="true" style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">$99</div>
                            <p contenteditable="true" style="color: #666;">/month</p>
                            <div style="margin: 1.5rem 0; text-align: left;">
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Everything in Pro</p>
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature six</p>
                                <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Priority support</p>
                            </div>
                            <button contenteditable="true" style="width: 100%; padding: 0.75rem; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="add-pricing">Add pricing plan</div>`
    },

    contact: {
        html: `<div class="builder-item">
                    <div class="drag-handle">⋮⋮</div>
                    ${settingsItem}
                    <div style="padding: 3rem; background: #f5f5f5;" class="contact-form">
                        <h3 contenteditable="true" style="text-align: center; margin-bottom: 2rem;">Contact Us</h3>
                        <div style="max-width: 500px; margin: 0 auto;">
                            <input type="text" placeholder="Your Name" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
                            <input type="email" placeholder="Your Email" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
                            <textarea placeholder="Your Message" rows="4" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px; resize: vertical;"></textarea>
                            <button contenteditable="true" style="width: 100%; padding: 0.75rem; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Send Message</button>
                        </div>
                    </div>
                </div>`,
        settings:  `<div class="settings-menu-item" data-action="edit-form"  data-bs-toggle="modal" data-bs-target="#formBuilderModal">Edit Form</div>`
    },

    gallery: {
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}
                <div style="padding: 3rem; background: #fff;">
                    <h3 contenteditable="true" style="text-align: center; margin-bottom: 2rem;">Our Gallery</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <div style="aspect-ratio: 1; background: #ddd; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">Image 1</div>
                        <div style="aspect-ratio: 1; background: #ddd; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">Image 2</div>
                        <div style="aspect-ratio: 1; background: #ddd; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">Image 3</div>
                        <div style="aspect-ratio: 1; background: #ddd; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">Image 4</div>
                        <div style="aspect-ratio: 1; background: #ddd; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">Image 5</div>
                        <div style="aspect-ratio: 1; background: #ddd; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">Image 6</div>
                    </div>
                </div>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="edit-gallery">Edit Gallery</div>
                    <div class="settings-menu-item" data-action="add-card">Add Card</div>
                    <div class="settings-menu-item" data-action="add-image">Add Image</div>`
    },

    footer: {
        html: `<div class="builder-item">
                <div class="drag-handle">⋮⋮</div>
                ${settingsItem}
                <footer style="background: #333; color: #fff; padding: 2rem;">
                    <div style="display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto;">
                        <div>
                            <h4 contenteditable="true" style="margin-bottom: 1rem;">Company</h4>
                            <p contenteditable="true" style="color: #aaa;">Building amazing things since 2025.</p>
                        </div>
                        <div>
                            <h4 contenteditable="true" style="margin-bottom: 1rem;">Links</h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <span contenteditable="true" style="color: #aaa;">Home</span>
                                <span contenteditable="true" style="color: #aaa;">About</span>
                                <span contenteditable="true" style="color: #aaa;">Services</span>
                            </div>
                        </div>
                        <div>
                            <h4 contenteditable="true" style="margin-bottom: 1rem;">Contact</h4>
                            <p contenteditable="true" style="color: #aaa;">hello@company.com</p>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #444;">
                        <p contenteditable="true" style="margin: 0; color: #aaa;">© 2025 Your Company. All rights reserved.</p>
                    </div>
                </footer>
            </div>`,
        settings:  `<div class="settings-menu-item" data-action="edit-links">Edit Footer Links</div>`
    }
}
