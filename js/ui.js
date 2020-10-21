function createLabels(labelsArr) {
  let ul = document.createElement("UL")
  labelsArr.forEach(a => {
    let li = document.createElement("LI")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.value = a.label
    checkbox.id = a.label
    checkbox.checked = true
    checkbox.onclick = function() {
      checkboxChange(this)
    }
    li.appendChild(checkbox)

    let label = document.createElement("label")
    label.for = a.label
    label.innerHTML = a.label
    li.appendChild(label)
    li.style.color = a.color

    ul.appendChild(li)
  })
  document.getElementById("labels").appendChild(ul)
}

function checkboxChange(element) {
  let circles = document.querySelectorAll(`[group="circle_${element.id}"]`)
  circles.forEach(circle => {
    element.checked
      ? (circle.style.visibility = "visible")
      : (circle.style.visibility = "hidden")
  })
}

function updateMarkers(startDate, endDate) {
  const newMarkers = getMarkers(startDate, endDate)
  d3.json("https://sharemap.org/geojson//public/Scandinavia.json", function(
    data
  ) {
    createCirclesSVG(newMarkers)
  })
}

function createCirclesSVG(dataMarkers) {
  //Removing old circles
  var element = document.getElementsByTagName("circle"),
    index

  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index])
  }

  // Create a color scale
  var color = d3
    .scaleOrdinal()
    .domain(groups)
    .range(colors)

  // Add a scale for bubble size
  var size = d3
    .scaleLinear()
    .domain([1, 100]) // What's in the data
    .range([4, 10]) // Size in pixel

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    var tooltip = document.getElementById("tooltip")
    tooltip.style.opacity = 1
    tooltip.style.transition = "opacity 0s"
  }
  var mousemove = function(d) {
    var tooltip = document.getElementById("tooltip")
    tooltip.innerHTML = d.name
    tooltip.style.position = "absolute"
    tooltip.style.opacity = 1
    tooltip.style.left = d3.mouse(this)[0] + 30 + "px"
    tooltip.style.top = d3.mouse(this)[1] + "px"
  }
  var mouseleave = function(d) {
    setTimeout(function() {
      var tooltip = document.getElementById("tooltip")
      tooltip.style.opacity = 0
      tooltip.style.transition = "opacity 2s"
    }, 700)
  }

  // Add circles:
  svg
    .selectAll("myCircles")
    .data(dataMarkers)
    .enter()
    .append("circle")
    .attr("group", function(d) {
      return `circle_${d.group}`
    })
    .attr("cx", function(d) {
      return projection([d.long, d.lat])[0]
    })
    .attr("cy", function(d) {
      return projection([d.long, d.lat])[1]
    })
    .attr("r", function(d) {
      return size(d.size)
    })
    .style("fill", function(d) {
      return color(d.group)
    })
    .attr("stroke", function(d) {
      return color(d.group)
    })
    .attr("stroke-width", 3)
    .attr("fill-opacity", 0.4)
    .on("mouseleave", mouseleave)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
}
