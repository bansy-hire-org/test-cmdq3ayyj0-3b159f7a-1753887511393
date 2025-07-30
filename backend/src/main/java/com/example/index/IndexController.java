import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/indexes")
public class IndexController {

    private final List<Index> indexes = new ArrayList<>();

    @PostMapping
    public Index createIndex(@RequestBody Index index) {
        indexes.add(index);
        index.setId(indexes.size()); //simple id generation.  Won't persist across restarts.
        return index;
    }

    @GetMapping
    public List<Index> getIndexes() {
        return indexes;
    }

    @GetMapping("/{id}")
    public Index getIndex(@PathVariable int id) {
        if (id > 0 && id <= indexes.size()) {
            return indexes.get(id - 1);
        } else {
            return null; //handle appropriately in a real application.  Throw exception.
        }
    }
}
