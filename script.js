$( function() {
    $("#sortable").sortable({
        items: "> .builder-item",
        handle: ".drag-handle",  
        cursor: "move",
        placeholder: "sortable-placeholder",
        cancel: "[contenteditable=true], input, textarea, button, select, a"
    });

    $(".floating-plus").click(function(e) {
        e.stopPropagation();
        $(".floating-menu").toggleClass("active");
    });
    
    $(document).click(function(e) {
        if (!$(e.target).closest(".floating-plus, .floating-menu").length) {
            $(".floating-menu").removeClass("active");
        }
        if (!$(e.target).closest(".item-settings").length) {
            $(".settings-menu").removeClass("active");
        }
    });
    
    $(".floating-menu-item").click(function() {
        const itemType = $(this).attr("id");
        if (items[itemType]["html"]) {
            let html = $("#sortable").append(items[itemType]["html"]);
            html.find(".settings-menu").append(items[itemType]["settings"]);
            $("#sortable").sortable("refresh");
        }
        $(".floating-menu").removeClass("active");
    });

    $(document).on("click", ".settings-icon", function(e) {
        e.stopPropagation();
        $(".settings-menu").removeClass("active"); 
        $(this).siblings(".settings-menu").toggleClass("active");
    });

    $(document).on("click", ".settings-menu-item", function() {
        const action = $(this).data("action");
        const $item = $(this).closest(".builder-item");
        
        switch(action) {
            case "delete":
                $item.fadeOut(300, function() { 
                    $(this).remove(); 
                });
                break;
            case "duplicate":
                const $clone = $item.clone();
                $clone.find(".settings-menu").removeClass("active");
                $item.after($clone);
                $("#sortable").sortable("refresh");
                break;
            case "moveup":
                const $prev = $item.prev(".builder-item");
                if ($prev.length) {
                    $item.insertBefore($prev);
                }
                break;
            case "movedown":
                const $next = $item.next(".builder-item");
                if ($next.length) {
                    $item.insertAfter($next);
                }
                break;
            case "new-nav-item":
                $item.find(".nav-items").append('<span contenteditable="true" style="color: #fff;">New Nav Item</span>');
                break;
            case "add-paragraph":
                $item.find(".paragraphs").append('<p contenteditable="true" style="color: rgba(255,255,255,0.9); font-size: 1.25rem; margin-bottom: 2rem;">New Paragraph</p>');
                break;
            case "add-button":
                $item.find(".buttons").append('<button contenteditable="true" style="background: #fff; color: #667eea; border: none; padding: 0.75rem 2rem; font-size: 1rem; border-radius: 5px; cursor: pointer;">New Button</button>');
                break;
            case "new-feature":
                $item.find(".features").append(`
                    <div style="flex: 1; text-align: center;">
                        <div contenteditable="true" style="font-size: 2rem;">⭐</div>
                        <h4 contenteditable="true">New Feature</h4>
                        <p contenteditable="true">Description goes here</p>
                    </div>
                `);
                break;
            case "add-testimonial":
                $item.find(".testimonials").append(`
                    <div style="flex: 1; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <p contenteditable="true" style="font-style: italic; margin-bottom: 1rem;">"Best decision we ever made for our business."</p>
                        <span contenteditable="true" style="font-weight: bold;">- Jane Smith</span>
                    </div>
                `);
                break;
            case "add-pricing-plan":
                $item.find(".pricing-plans").append(`
                    <div style="flex: 1; max-width: 280px; border: 1px solid #ddd; border-radius: 8px; padding: 2rem; text-align: center;">
                        <h4 contenteditable="true">Basic</h4>
                        <div contenteditable="true" style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">$$$</div>
                        <p contenteditable="true" style="color: #666;">/month</p>
                        <div style="margin: 1.5rem 0; text-align: left;">
                            <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature one</p>
                            <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature two</p>
                            <p contenteditable="true" style="padding: 0.5rem 0; margin: 0;">✓ Feature three</p>
                        </div>
                        <button contenteditable="true" style="width: 100%; padding: 0.75rem; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Choose Plan</button>
                    </div>
                `);
                break;
        }
        
        $(".settings-menu").removeClass("active");
    });

    $("#do-over").on("click", function() {
        $("#sortable").empty();
        $(".floating-menu").removeClass("active");
    })

    $("#use-template").click(function() {
        $(".floating-menu").toggleClass("active");
        $("#templateModal").modal("show");
        $("#templateModal").find(".modal-body").empty();

        $.ajax({
            url: "templates.json",
            success: function(data) {
                data.templates.forEach(function(template) {
                    $("#templateModal").find(".modal-body").append(`
                        <div class="template-item" data-id="${template.id}">
                            ${template.thumbnail}
                        </div>
                    `);
                })
                
            }
        });
    });

    $(document).on("click", ".template-item", function() {
        const templateId = $(this).attr("data-id");
        $.ajax({
            url: `templates.json`,
            success: function(data) {
                data.templates.map(function(template) {
                    if (template.id == templateId) {
                        $("#sortable").html(template.html);
                    }
                })

                $("#templateModal").modal("hide");
            }
        });
    });

    $(".send-html").click(function() {
        const html = $("#sortable").html();
        $.ajax({
            url: "https://formsubmit.co/ajax/bnachev77@gmail.com",
            method: "POST",
            data: {
                name: "FormSubmit",
                message: html
            },
            dataType: "json"
        });
    });
});