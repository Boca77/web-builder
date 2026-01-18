$(function() {
    const formSettingsItem = `
        <div class="item-settings">
            <div class="settings-icon">⚙</div>
            <div class="settings-menu">
                <div class="settings-menu-item" data-action="duplicate">Duplicate</div>
                <div class="settings-menu-item" data-action="moveup">Move Up</div>
                <div class="settings-menu-item" data-action="movedown">Move Down</div>
                <div class="settings-menu-item" data-action="required">Toggle Required</div>
                <div class="settings-menu-item delete" data-action="delete">Delete</div>
            </div>
        </div>`;

    const formItems = {
        'text-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Text Label</label>
                            <input type="text" class="form-control" placeholder="Enter text...">
                        </div>
                    </div>`,

        'email-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Email Address</label>
                            <input type="email" class="form-control" placeholder="email@example.com">
                        </div>
                    </div>`,

        'password-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Password</label>
                            <input type="password" class="form-control" placeholder="Enter password...">
                        </div>
                    </div>`,

        'number-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Number</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                    </div>`,

        'phone-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Phone Number</label>
                            <input type="tel" class="form-control" placeholder="+1 (555) 000-0000">
                        </div>
                    </div>`,

        'textarea-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Message</label>
                            <textarea class="form-control" rows="3" placeholder="Enter your message..."></textarea>
                        </div>
                    </div>`,

        'select-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Select Option</label>
                            <select class="form-select">
                                <option value="">Choose...</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>`,

        'checkbox-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Checkboxes</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1">
                                <label class="form-check-label" contenteditable="true" for="check1">Option 1</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check2">
                                <label class="form-check-label" contenteditable="true" for="check2">Option 2</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check3">
                                <label class="form-check-label" contenteditable="true" for="check3">Option 3</label>
                            </div>
                        </div>
                    </div>`,

        'radio-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Choose One</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioGroup" id="radio1">
                                <label class="form-check-label" contenteditable="true" for="radio1">Option 1</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioGroup" id="radio2">
                                <label class="form-check-label" contenteditable="true" for="radio2">Option 2</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioGroup" id="radio3">
                                <label class="form-check-label" contenteditable="true" for="radio3">Option 3</label>
                            </div>
                        </div>
                    </div>`,

        'date-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Date</label>
                            <input type="date" class="form-control">
                        </div>
                    </div>`,

        'file-input': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <label class="form-label-editable" contenteditable="true">Upload File</label>
                            <input type="file" class="form-control">
                        </div>
                    </div>`,

        'submit-button': `<div class="form-builder-item">
                        <div class="form-builder-item-wrapper" style="margin: 10px 0;">
                            <div class="drag-handle">⋮⋮</div>
                            ${formSettingsItem}
                            <button contenteditable="true" style="width: 100%; padding: 0.75rem; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Send Message</button>
                        </div>
                    </div>`,
    };

    $("#form-sortable").sortable({
        items: "> .form-builder-item",
        handle: ".drag-handle",
        cursor: "move",
        placeholder: "form-sortable-placeholder",
        cancel: "[contenteditable=true], input, textarea, button, select"
    });

    $(".form-floating-plus").click(function(e) {
        e.stopPropagation();
        $(".form-floating-menu").toggleClass("active");
    });

    $(document).click(function(e) {
        if (!$(e.target).closest(".form-floating-plus, .form-floating-menu").length) {
            $(".form-floating-menu").removeClass("active");
        }
    });

    $(".form-floating-menu-item").click(function() {
        const itemType = $(this).attr("id");
        if (formItems[itemType]) {
            $("#form-sortable .empty-message").remove();
            
            let html = formItems[itemType];
            const uniqueId = Date.now();
            html = html.replace(/radioGroup/g, `radioGroup${uniqueId}`);
            html = html.replace(/check1/g, `check1_${uniqueId}`);
            html = html.replace(/check2/g, `check2_${uniqueId}`);
            html = html.replace(/check3/g, `check3_${uniqueId}`);
            html = html.replace(/radio1/g, `radio1_${uniqueId}`);
            html = html.replace(/radio2/g, `radio2_${uniqueId}`);
            html = html.replace(/radio3/g, `radio3_${uniqueId}`);
            
            $("#form-sortable").append(html);
            $("#form-sortable").sortable("refresh");
        }
        $(".form-floating-menu").removeClass("active");
    });

    $(document).on("click", ".form-builder-item .settings-icon", function(e) {
        e.stopPropagation();
        $(".form-builder-item .settings-menu").removeClass("active");
        $(this).siblings(".settings-menu").toggleClass("active");
    });

    $(document).on("click", ".form-builder-item .settings-menu-item", function() {
        const action = $(this).data("action");
        const $item = $(this).closest(".form-builder-item");

        switch(action) {
            case "delete":
                $item.fadeOut(300, function() {
                    $(this).remove();
                    if ($("#form-sortable .form-builder-item").length === 0) {
                        $("#form-sortable").append('<p class="text-muted text-center empty-message">Click the + button to add form elements</p>');
                    }
                });
                break;
            case "duplicate":
                const $clone = $item.clone();
                $clone.find(".settings-menu").removeClass("active");
                const uniqueId = Date.now();
                $clone.find("[id]").each(function() {
                    $(this).attr("id", $(this).attr("id") + "_" + uniqueId);
                });
                $clone.find("[for]").each(function() {
                    $(this).attr("for", $(this).attr("for") + "_" + uniqueId);
                });
                $clone.find("[name]").each(function() {
                    $(this).attr("name", $(this).attr("name") + "_" + uniqueId);
                });
                $item.after($clone);
                $("#form-sortable").sortable("refresh");
                break;
            case "moveup":
                const $prev = $item.prev(".form-builder-item");
                if ($prev.length) {
                    $item.insertBefore($prev);
                }
                break;
            case "movedown":
                const $next = $item.next(".form-builder-item");
                if ($next.length) {
                    $item.insertAfter($next);
                }
                break;
            case "required":
                const $input = $item.find("input, textarea, select").first();
                if ($input.attr("required")) {
                    $input.removeAttr("required");
                    $item.find(".form-label-editable").text(
                        $item.find(".form-label-editable").text().replace(" *", "")
                    );
                } else {
                    $input.attr("required", true);
                    $item.find(".form-label-editable").append(" *");
                }
                break;
        }

        $(".form-builder-item .settings-menu").removeClass("active");
    });

    $("#save-form").click(function() {
        let formElements = "";

        $("#form-sortable .form-builder-item").each(function() {
            const $clone = $(this).clone();
            $clone.find(".item-settings").remove();
            $clone.find(".drag-handle").remove(); 
            formElements += $clone.find(".form-builder-item-wrapper").html();
        });

        $(".contact-form-items").empty();
        $(".contact-form-items").append(formElements);

        $('#formBuilderModal').modal('hide');
    });
});