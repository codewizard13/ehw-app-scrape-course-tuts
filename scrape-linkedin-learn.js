// scrape-youtube.js | Eric Hepperle

/* PASTE this into developer console on a video page and run */
console.clear();

// SELECTOR VARS
sel_chGroups = '[data-purpose^="section-panel"]'
sel_subchGroups = '[class*="curriculum-item-link--item-container"]'
sel_subchName = '[data-purpose="item-title"]'
sel_resGroup = '[class*=resource--ellipsis]'

res_out_head = "##### RESOURCES:\n"
res_out = ''

chGroups = document.querySelectorAll(sel_chGroups)
chGroups.forEach(function (chGroup, c) {
  ch_name = chGroup.querySelector('h3').innerText
  console.log("### ", ch_name)

  subchGroups = chGroup.querySelectorAll(sel_subchGroups)
  subchGroups.forEach(function (subchGroup, s) {
    subch_name = subchGroup.querySelector(sel_subchName)

    if (subch_name != '' && subch_name != null) {
      console.log('#### ', subch_name.innerText)
    }

    // RESOURCES
    resources = subchGroup.querySelectorAll(sel_resGroup)
    resources.forEach(function (res, r) {

      // Only print resources at the end of chapter

      if (res != '') {
        res_out += `- ${res.innerText}\n`
      }

    }) // end resources

  }) // end subchGroups

  console.log(res_out)
  res_out = res_out_head

})